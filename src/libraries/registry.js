/**
 * Built-in Excalidraw Library Registry
 * 
 * Format: .excalidrawlib JSON files containing pre-made icons/shapes
 * that can be inserted into the canvas programmatically.
 * 
 * To add new libraries:
 * 1. Export shapes from Excalidraw as .excalidraw file
 * 2. Wrap the elements array in { type: "excalidrawlib", libraryItems: [{ status: "published", elements }] }
 * 3. Add entry to LIBRARY_ITEMS below
 */

// Built-in library items with inline elements (no external file needed)
export const LIBRARY_ITEMS = {
  // AWS Icons
  'aws-ec2': {
    name: 'AWS EC2',
    category: 'aws',
    elements: [
      {
        id: 'ec2-box',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        strokeColor: '#FF9900',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'aws-ec2-group'
      },
      {
        id: 'ec2-label',
        type: 'text',
        x: 8,
        y: 22,
        text: 'EC2',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#FF9900',
        textAlign: 'left'
      }
    ]
  },
  'aws-s3': {
    name: 'AWS S3',
    category: 'aws',
    elements: [
      {
        id: 's3-bucket',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        strokeColor: '#3F8624',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'aws-s3-group'
      },
      {
        id: 's3-label',
        type: 'text',
        x: 8,
        y: 22,
        text: 'S3',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#3F8624',
        textAlign: 'left'
      }
    ]
  },
  'aws-lambda': {
    name: 'AWS Lambda',
    category: 'aws',
    elements: [
      {
        id: 'lambda-shape',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        strokeColor: '#FF9900',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'aws-lambda-group'
      },
      {
        id: 'lambda-label',
        type: 'text',
        x: 5,
        y: 22,
        text: 'Lambda',
        fontSize: 12,
        fontFamily: 2,
        strokeColor: '#FF9900',
        textAlign: 'left'
      }
    ]
  },
  'aws-rds': {
    name: 'AWS RDS',
    category: 'aws',
    elements: [
      {
        id: 'rds-shape',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        strokeColor: '#3B48CC',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'aws-rds-group'
      },
      {
        id: 'rds-label',
        type: 'text',
        x: 8,
        y: 22,
        text: 'RDS',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#3B48CC',
        textAlign: 'left'
      }
    ]
  },
  'aws-api-gateway': {
    name: 'AWS API Gateway',
    category: 'aws',
    elements: [
      {
        id: 'api-gw-shape',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 100,
        height: 60,
        strokeColor: '#FF9900',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'aws-api-gw-group'
      },
      {
        id: 'api-gw-label',
        type: 'text',
        x: 3,
        y: 22,
        text: 'API GW',
        fontSize: 12,
        fontFamily: 2,
        strokeColor: '#FF9900',
        textAlign: 'left'
      }
    ]
  },
  'aws-sqs': {
    name: 'AWS SQS',
    category: 'aws',
    elements: [
      {
        id: 'sqs-shape',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        strokeColor: '#FF9900',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'aws-sqs-group'
      },
      {
        id: 'sqs-label',
        type: 'text',
        x: 8,
        y: 22,
        text: 'SQS',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#FF9900',
        textAlign: 'left'
      }
    ]
  },
  'aws-sns': {
    name: 'AWS SNS',
    category: 'aws',
    elements: [
      {
        id: 'sns-shape',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        strokeColor: '#FF9900',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'aws-sns-group'
      },
      {
        id: 'sns-label',
        type: 'text',
        x: 8,
        y: 22,
        text: 'SNS',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#FF9900',
        textAlign: 'left'
      }
    ]
  },
  'aws-cloudfront': {
    name: 'AWS CloudFront',
    category: 'aws',
    elements: [
      {
        id: 'cf-shape',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 100,
        height: 60,
        strokeColor: '#FF9900',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'aws-cf-group'
      },
      {
        id: 'cf-label',
        type: 'text',
        x: 5,
        y: 22,
        text: 'CloudFront',
        fontSize: 11,
        fontFamily: 2,
        strokeColor: '#FF9900',
        textAlign: 'left'
      }
    ]
  },
  'aws-dynamodb': {
    name: 'AWS DynamoDB',
    category: 'aws',
    elements: [
      {
        id: 'ddb-shape',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 100,
        height: 60,
        strokeColor: '#3F8624',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'aws-ddb-group'
      },
      {
        id: 'ddb-label',
        type: 'text',
        x: 3,
        y: 22,
        text: 'DynamoDB',
        fontSize: 11,
        fontFamily: 2,
        strokeColor: '#3F8624',
        textAlign: 'left'
      }
    ]
  },

  // Generic/Common icons
  'server': {
    name: 'Server',
    category: 'generic',
    elements: [
      {
        id: 'server-box',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        strokeColor: '#1e1e1e',
        backgroundColor: '#f5f5f5',
        fillStyle: 'solid',
        strokeWidth: 1,
        roughness: 0,
        groupId: 'server-group'
      },
      {
        id: 'server-line1',
        type: 'line',
        x: 5,
        y: 15,
        width: 70,
        height: 0,
        strokeColor: '#1e1e1e',
        strokeWidth: 1
      },
      {
        id: 'server-line2',
        type: 'line',
        x: 5,
        y: 30,
        width: 70,
        height: 0,
        strokeColor: '#1e1e1e',
        strokeWidth: 1
      },
      {
        id: 'server-line3',
        type: 'line',
        x: 5,
        y: 45,
        width: 70,
        height: 0,
        strokeColor: '#1e1e1e',
        strokeWidth: 1
      }
    ]
  },
  'database': {
    name: 'Database',
    category: 'generic',
    elements: [
      {
        id: 'db-ellipse',
        type: 'ellipse',
        x: 0,
        y: 0,
        width: 80,
        height: 30,
        strokeColor: '#1e1e1e',
        backgroundColor: '#f5f5f5',
        fillStyle: 'solid',
        strokeWidth: 1,
        roughness: 0,
        groupId: 'db-group'
      },
      {
        id: 'db-rect',
        type: 'rectangle',
        x: 0,
        y: 15,
        width: 80,
        height: 50,
        strokeColor: '#1e1e1e',
        backgroundColor: '#f5f5f5',
        fillStyle: 'solid',
        strokeWidth: 1,
        roughness: 0,
        groupId: 'db-group'
      }
    ]
  },
  'user': {
    name: 'User/Person',
    category: 'generic',
    elements: [
      {
        id: 'user-head',
        type: 'ellipse',
        x: 30,
        y: 0,
        width: 20,
        height: 20,
        strokeColor: '#1e1e1e',
        backgroundColor: '#f5f5f5',
        fillStyle: 'solid',
        strokeWidth: 1,
        roughness: 0,
        groupId: 'user-group'
      },
      {
        id: 'user-body',
        type: 'ellipse',
        x: 15,
        y: 25,
        width: 50,
        height: 35,
        strokeColor: '#1e1e1e',
        backgroundColor: '#f5f5f5',
        fillStyle: 'solid',
        strokeWidth: 1,
        roughness: 0,
        groupId: 'user-group'
      }
    ]
  },
  'cloud': {
    name: 'Cloud',
    category: 'generic',
    elements: [
      {
        id: 'cloud-shape',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 100,
        height: 60,
        strokeColor: '#1e1e1e',
        backgroundColor: '#e8f4fc',
        fillStyle: 'solid',
        strokeWidth: 1,
        roughness: 0,
        borderRadius: 20,
        groupId: 'cloud-group'
      },
      {
        id: 'cloud-label',
        type: 'text',
        x: 25,
        y: 22,
        text: 'Cloud',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#1e1e1e',
        textAlign: 'center'
      }
    ]
  },
  'container': {
    name: 'Container/Docker',
    category: 'generic',
    elements: [
      {
        id: 'container-box',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        strokeColor: '#2496ed',
        backgroundColor: '#f0f8ff',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'container-group'
      },
      {
        id: 'container-whale',
        type: 'text',
        x: 20,
        y: 18,
        text: '🐳',
        fontSize: 20,
        fontFamily: 2,
        textAlign: 'center'
      },
      {
        id: 'container-label',
        type: 'text',
        x: 15,
        y: 38,
        text: 'Container',
        fontSize: 10,
        fontFamily: 2,
        strokeColor: '#2496ed',
        textAlign: 'center'
      }
    ]
  },
  'kubernetes': {
    name: 'Kubernetes',
    category: 'generic',
    elements: [
      {
        id: 'k8s-wheel',
        type: 'ellipse',
        x: 15,
        y: 5,
        width: 70,
        height: 70,
        strokeColor: '#326ce5',
        backgroundColor: '#f0f4ff',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'k8s-group'
      },
      {
        id: 'k8s-label',
        type: 'text',
        x: 22,
        y: 30,
        text: 'K8s',
        fontSize: 18,
        fontFamily: 2,
        strokeColor: '#326ce5',
        textAlign: 'center'
      }
    ]
  },
  'redis': {
    name: 'Redis',
    category: 'generic',
    elements: [
      {
        id: 'redis-box',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        strokeColor: '#DC382D',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'redis-group'
      },
      {
        id: 'redis-label',
        type: 'text',
        x: 8,
        y: 22,
        text: 'Redis',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#DC382D',
        textAlign: 'left'
      }
    ]
  },
  'mqtt': {
    name: 'MQTT Broker',
    category: 'generic',
    elements: [
      {
        id: 'mqtt-box',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        strokeColor: '#660066',
        backgroundColor: '#FFF0FF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'mqtt-group'
      },
      {
        id: 'mqtt-label',
        type: 'text',
        x: 5,
        y: 22,
        text: 'MQTT',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#660066',
        textAlign: 'left'
      }
    ]
  },
  'kafka': {
    name: 'Apache Kafka',
    category: 'generic',
    elements: [
      {
        id: 'kafka-box',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 90,
        height: 60,
        strokeColor: '#231F20',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'kafka-group'
      },
      {
        id: 'kafka-label',
        type: 'text',
        x: 3,
        y: 22,
        text: 'Kafka',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#231F20',
        textAlign: 'left'
      }
    ]
  },
  'graphql': {
    name: 'GraphQL',
    category: 'generic',
    elements: [
      {
        id: 'gql-hex',
        type: 'diamond',
        x: 0,
        y: 0,
        width: 80,
        height: 80,
        strokeColor: '#E10098',
        backgroundColor: '#FFFFFF',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'gql-group'
      },
      {
        id: 'gql-label',
        type: 'text',
        x: 18,
        y: 32,
        text: 'GQL',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#E10098',
        textAlign: 'center'
      }
    ]
  },
  'rest-api': {
    name: 'REST API',
    category: 'generic',
    elements: [
      {
        id: 'rest-box',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        strokeColor: '#1e1e1e',
        backgroundColor: '#f5f5f5',
        fillStyle: 'solid',
        strokeWidth: 1,
        roughness: 0,
        groupId: 'rest-group'
      },
      {
        id: 'rest-label',
        type: 'text',
        x: 5,
        y: 22,
        text: 'REST',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#1e1e1e',
        textAlign: 'center'
      }
    ]
  },
  'webhook': {
    name: 'Webhook',
    category: 'generic',
    elements: [
      {
        id: 'wh-circle',
        type: 'ellipse',
        x: 10,
        y: 5,
        width: 60,
        height: 50,
        strokeColor: '#ff6b6b',
        backgroundColor: '#fff5f5',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'wh-group'
      },
      {
        id: 'wh-label',
        type: 'text',
        x: 18,
        y: 22,
        text: '🪝',
        fontSize: 16,
        fontFamily: 2,
        textAlign: 'center'
      }
    ]
  },
  'message-queue': {
    name: 'Message Queue',
    category: 'generic',
    elements: [
      {
        id: 'mq-box',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 100,
        height: 60,
        strokeColor: '#1e1e1e',
        backgroundColor: '#fffbe6',
        fillStyle: 'hachure',
        strokeWidth: 1,
        roughness: 0,
        groupId: 'mq-group'
      },
      {
        id: 'mq-label',
        type: 'text',
        x: 15,
        y: 22,
        text: 'Queue',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#1e1e1e',
        textAlign: 'center'
      }
    ]
  },
  'cache': {
    name: 'Cache',
    category: 'generic',
    elements: [
      {
        id: 'cache-box',
        type: 'rectangle',
        x: 0,
        y: 0,
        width: 70,
        height: 50,
        strokeColor: '#9333EA',
        backgroundColor: '#faf5ff',
        fillStyle: 'solid',
        strokeWidth: 2,
        roughness: 0,
        groupId: 'cache-group'
      },
      {
        id: 'cache-label',
        type: 'text',
        x: 8,
        y: 17,
        text: 'Cache',
        fontSize: 14,
        fontFamily: 2,
        strokeColor: '#9333EA',
        textAlign: 'center'
      }
    ]
  }
};

/**
 * Get list of available library items
 */
export function listLibraryItems() {
  return Object.entries(LIBRARY_ITEMS).map(([id, item]) => ({
    id,
    name: item.name,
    category: item.category
  }));
}

/**
 * Get library item by ID
 */
export function getLibraryItem(id) {
  return LIBRARY_ITEMS[id] || null;
}

/**
 * Get all unique categories
 */
export function listCategories() {
  const categories = new Set();
  Object.values(LIBRARY_ITEMS).forEach(item => categories.add(item.category));
  return Array.from(categories);
}
