import fs from 'fs';
import path from 'path';

// Slugify helper
function slugify(text) {
  return (text || '')
    .toString()
    .toLowerCase()
    .replace(/\n/g, ' ')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function buildFullCatalog() {
  const dataDir = path.resolve('src/libraries/data');
  const catalog = {};
  const librariesMeta = [];

  if (fs.existsSync(dataDir)) {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

    for (const file of files) {
      const filePath = path.join(dataDir, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const libKey = data.key;
      
      librariesMeta.push({
        key: libKey,
        name: data.name,
        itemCount: data.items.length
      });

      const usedSlugs = new Set();

      data.items.forEach((itemElements, idx) => {
        // Find text labels if any
        const textElements = itemElements.filter(e => e.type === 'text');
        let label = textElements.map(t => (t.text || '').trim()).filter(Boolean).join(' ');
        
        let slug = slugify(label);
        if (!slug || slug.length < 2) {
          slug = `item-${idx + 1}`;
        }

        // Ensure unique slug within library
        let uniqueSlug = slug;
        let counter = 2;
        while (usedSlugs.has(uniqueSlug)) {
          uniqueSlug = `${slug}-${counter++}`;
        }
        usedSlugs.add(uniqueSlug);

        const fullId = `${libKey}:${uniqueSlug}`;
        const shortId = uniqueSlug;

        catalog[fullId] = {
          id: fullId,
          shortId,
          index: idx + 1,
          name: label || `${data.name} #${idx + 1}`,
          library: libKey,
          libraryName: data.name,
          elements: itemElements
        };
      });
    }
  }

  return { catalog, librariesMeta };
}
