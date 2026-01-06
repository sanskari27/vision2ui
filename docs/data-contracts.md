# Data Contracts

This document defines all schemas and data structures used across Vision2UI pipelines.

## Component Metadata Schema

Schema for component library preprocessing (Pipeline 1).

```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"type": "object",
	"required": ["id", "componentName", "category"],
	"properties": {
		"id": {
			"type": "string",
			"description": "Unique component identifier (kebab-case)",
			"example": "primary-button"
		},
		"componentName": {
			"type": "string",
			"description": "React/JSX component name (PascalCase)",
			"example": "PrimaryButton"
		},
		"category": {
			"type": "string",
			"description": "Component category",
			"enum": ["Button", "Card", "Input", "Form", "Layout", "Navigation", "Feedback", "Other"],
			"example": "Button"
		},
		"props": {
			"type": "object",
			"description": "Available props and their options",
			"additionalProperties": {
				"type": "array",
				"items": {
					"type": "string"
				}
			},
			"example": {
				"size": ["sm", "md", "lg"],
				"variant": ["primary", "secondary"],
				"disabled": ["boolean"]
			}
		},
		"usageExample": {
			"type": "string",
			"description": "Code example showing component usage",
			"example": "<PrimaryButton size=\"md\" variant=\"primary\" />"
		},
		"minConfidence": {
			"type": "number",
			"description": "Minimum confidence threshold for matching (0.0-1.0)",
			"minimum": 0.0,
			"maximum": 1.0,
			"default": 0.8,
			"example": 0.85
		},
		"screenshotPath": {
			"type": "string",
			"description": "Path to component screenshot",
			"example": "/components/primary-button.png"
		},
		"sourceCodePath": {
			"type": "string",
			"description": "Path to component source code",
			"example": "/src/components/PrimaryButton.tsx"
		},
		"description": {
			"type": "string",
			"description": "Human-readable component description",
			"example": "Primary action button with multiple size and variant options"
		}
	}
}
```

## Detected Region Schema

Schema for vision and region detection (Pipeline 3).

```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"type": "object",
	"required": ["regionId", "type", "box"],
	"properties": {
		"regionId": {
			"type": "string",
			"description": "Unique identifier for the region",
			"example": "r1"
		},
		"type": {
			"type": "string",
			"description": "Semantic type of the region",
			"enum": ["Button", "Card", "Input", "Text", "Image", "List", "Form", "Navigation", "Other"],
			"example": "Button"
		},
		"box": {
			"type": "array",
			"description": "Bounding box coordinates [x, y, width, height]",
			"items": {
				"type": "number"
			},
			"minItems": 4,
			"maxItems": 4,
			"example": [100, 200, 150, 40]
		},
		"text": {
			"type": "string",
			"description": "Extracted text content from the region",
			"example": "Sign In"
		},
		"confidence": {
			"type": "number",
			"description": "Confidence score for region detection (0.0-1.0)",
			"minimum": 0.0,
			"maximum": 1.0,
			"example": 0.95
		},
		"parentRegionId": {
			"type": "string",
			"description": "ID of parent region if this region is nested",
			"example": "r2"
		},
		"metadata": {
			"type": "object",
			"description": "Additional region-specific metadata",
			"additionalProperties": true,
			"example": {
				"color": "#3B82F6",
				"fontSize": 16
			}
		}
	}
}
```

## Component Match Decision Schema

Schema for component matching decisions (Pipeline 4).

```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"type": "object",
	"required": ["regionId", "decision"],
	"properties": {
		"regionId": {
			"type": "string",
			"description": "ID of the detected region",
			"example": "r1"
		},
		"decision": {
			"type": "string",
			"description": "Decision made for this region",
			"enum": ["USE_COMPONENT", "FALLBACK_LAYOUT", "FLAG_FOR_REVIEW"],
			"example": "USE_COMPONENT"
		},
		"component": {
			"type": "object",
			"description": "Matched component information (only if decision is USE_COMPONENT)",
			"properties": {
				"id": {
					"type": "string",
					"example": "primary-button"
				},
				"componentName": {
					"type": "string",
					"example": "PrimaryButton"
				},
				"confidence": {
					"type": "number",
					"minimum": 0.0,
					"maximum": 1.0,
					"example": 0.92
				}
			}
		},
		"props": {
			"type": "object",
			"description": "Inferred props for the component",
			"additionalProperties": true,
			"example": {
				"size": "md",
				"variant": "primary"
			}
		},
		"fallbackReason": {
			"type": "string",
			"description": "Reason for fallback (only if decision is FALLBACK_LAYOUT)",
			"example": "No matching component found above confidence threshold"
		},
		"alternatives": {
			"type": "array",
			"description": "Alternative component matches with lower confidence",
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "string"
					},
					"confidence": {
						"type": "number"
					}
				}
			}
		}
	}
}
```

## UI Tree Schema

Schema for UI tree composition (Pipeline 5).

```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"type": "object",
	"required": ["type"],
	"properties": {
		"type": {
			"type": "string",
			"description": "Node type (component name or semantic type)",
			"example": "Card"
		},
		"component": {
			"type": "string",
			"description": "Component name to use (if different from type)",
			"example": "Card"
		},
		"props": {
			"type": "object",
			"description": "Component props",
			"additionalProperties": true,
			"example": {
				"padding": "lg",
				"variant": "outlined"
			}
		},
		"text": {
			"type": "string",
			"description": "Text content for text nodes",
			"example": "Sign In"
		},
		"children": {
			"type": "array",
			"description": "Child nodes",
			"items": {
				"$ref": "#"
			}
		},
		"metadata": {
			"type": "object",
			"description": "Additional node metadata",
			"additionalProperties": true,
			"example": {
				"regionId": "r1",
				"originalBox": [100, 200, 150, 40]
			}
		}
	}
}
```

## Agent State Schema

Schema for agent orchestration state management.

```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"type": "object",
	"required": ["sessionId", "status"],
	"properties": {
		"sessionId": {
			"type": "string",
			"format": "uuid",
			"description": "Unique session identifier"
		},
		"screenshot": {
			"type": "string",
			"description": "Base64 encoded screenshot or file path"
		},
		"normalizedScreenshot": {
			"type": "string",
			"description": "Path to normalized screenshot"
		},
		"regions": {
			"type": "array",
			"description": "Detected regions (see Detected Region Schema above)",
			"items": {
				"type": "object"
			}
		},
		"matches": {
			"type": "array",
			"description": "Component match decisions (see Component Match Decision Schema above)",
			"items": {
				"type": "object"
			}
		},
		"uiTree": {
			"type": "object",
			"description": "UI tree structure (see UI Tree Schema above)"
		},
		"generatedCode": {
			"type": "string",
			"description": "Final generated code"
		},
		"errors": {
			"type": "array",
			"description": "List of errors encountered",
			"items": {
				"type": "object",
				"properties": {
					"message": {
						"type": "string"
					},
					"pipeline": {
						"type": "string"
					},
					"timestamp": {
						"type": "string",
						"format": "date-time"
					}
				}
			}
		},
		"warnings": {
			"type": "array",
			"description": "List of warnings",
			"items": {
				"type": "object",
				"properties": {
					"message": {
						"type": "string"
					},
					"pipeline": {
						"type": "string"
					}
				}
			}
		},
		"status": {
			"type": "string",
			"enum": ["processing", "complete", "error", "pending_clarification"],
			"description": "Current processing status"
		},
		"createdAt": {
			"type": "string",
			"format": "date-time"
		},
		"updatedAt": {
			"type": "string",
			"format": "date-time"
		}
	}
}
```

## Code Generation Output Schema

Schema for generated code output (Pipeline 6).

```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"type": "object",
	"required": ["code", "framework", "language"],
	"properties": {
		"code": {
			"type": "string",
			"description": "Generated source code"
		},
		"framework": {
			"type": "string",
			"enum": ["react", "react-native", "vue"],
			"description": "Target framework",
			"example": "react"
		},
		"language": {
			"type": "string",
			"enum": ["tsx", "jsx", "ts", "js"],
			"description": "Programming language",
			"example": "tsx"
		},
		"imports": {
			"type": "array",
			"description": "List of imports used",
			"items": {
				"type": "string"
			},
			"example": [
				"import React from 'react';",
				"import { Card, Button } from '@company/ui-library';"
			]
		},
		"components": {
			"type": "array",
			"description": "List of components used in the code",
			"items": {
				"type": "string"
			},
			"example": ["Card", "PrimaryButton", "FormInput"]
		},
		"metadata": {
			"type": "object",
			"description": "Additional metadata about the generation",
			"properties": {
				"generationTime": {
					"type": "number",
					"description": "Time taken to generate (ms)"
				},
				"componentCount": {
					"type": "number",
					"description": "Number of components used"
				},
				"fallbackCount": {
					"type": "number",
					"description": "Number of fallback layouts used"
				}
			}
		}
	}
}
```

## Configuration Schema

Schema for system configuration.

```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"type": "object",
	"properties": {
		"pipelines": {
			"type": "object",
			"properties": {
				"normalization": {
					"type": "object",
					"properties": {
						"targetWidth": {
							"type": "number",
							"default": 1920
						},
						"removeChrome": {
							"type": "boolean",
							"default": true
						}
					}
				},
				"vision": {
					"type": "object",
					"properties": {
						"model": {
							"type": "string",
							"enum": ["gpt-4-vision", "claude-vision"],
							"default": "gpt-4-vision"
						},
						"maxRegions": {
							"type": "number",
							"default": 50
						}
					}
				},
				"matching": {
					"type": "object",
					"properties": {
						"topK": {
							"type": "number",
							"default": 5
						},
						"confidenceThreshold": {
							"type": "number",
							"default": 0.7
						}
					}
				},
				"codeGeneration": {
					"type": "object",
					"properties": {
						"framework": {
							"type": "string",
							"enum": ["react", "react-native"],
							"default": "react"
						},
						"styling": {
							"type": "string",
							"enum": ["tailwind", "component-library", "css"],
							"default": "tailwind"
						}
					}
				}
			}
		},
		"safety": {
			"type": "object",
			"properties": {
				"blockDangerousPatterns": {
					"type": "boolean",
					"default": true
				},
				"requireComponents": {
					"type": "boolean",
					"default": false
				},
				"enforceAccessibility": {
					"type": "boolean",
					"default": true
				}
			}
		},
		"designSystem": {
			"type": "object",
			"properties": {
				"preferComponents": {
					"type": "boolean",
					"default": true
				},
				"allowRawHTML": {
					"type": "boolean",
					"default": true
				},
				"strictMode": {
					"type": "boolean",
					"default": false
				}
			}
		}
	}
}
```

## Error Schema

Standard error response format.

```json
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"type": "object",
	"required": ["error", "message"],
	"properties": {
		"error": {
			"type": "string",
			"description": "Error code",
			"example": "INVALID_INPUT"
		},
		"message": {
			"type": "string",
			"description": "Human-readable error message",
			"example": "Screenshot format not supported"
		},
		"pipeline": {
			"type": "string",
			"description": "Pipeline where error occurred",
			"example": "normalization"
		},
		"details": {
			"type": "object",
			"description": "Additional error details",
			"additionalProperties": true
		},
		"timestamp": {
			"type": "string",
			"format": "date-time",
			"description": "When the error occurred"
		}
	}
}
```

## Type Definitions (TypeScript)

For reference, here are TypeScript type definitions:

```typescript
// Component Metadata
interface ComponentMetadata {
	id: string;
	componentName: string;
	category: 'Button' | 'Card' | 'Input' | 'Form' | 'Layout' | 'Navigation' | 'Feedback' | 'Other';
	props?: Record<string, string[]>;
	usageExample?: string;
	minConfidence?: number;
	screenshotPath?: string;
	sourceCodePath?: string;
	description?: string;
}

// Detected Region
interface DetectedRegion {
	regionId: string;
	type: 'Button' | 'Card' | 'Input' | 'Text' | 'Image' | 'List' | 'Form' | 'Navigation' | 'Other';
	box: [number, number, number, number]; // [x, y, width, height]
	text?: string;
	confidence?: number;
	parentRegionId?: string;
	metadata?: Record<string, any>;
}

// Component Match Decision
interface ComponentMatchDecision {
	regionId: string;
	decision: 'USE_COMPONENT' | 'FALLBACK_LAYOUT' | 'FLAG_FOR_REVIEW';
	component?: {
		id: string;
		componentName: string;
		confidence: number;
	};
	props?: Record<string, any>;
	fallbackReason?: string;
	alternatives?: Array<{
		id: string;
		confidence: number;
	}>;
}

// UI Tree Node
interface UITreeNode {
	type: string;
	component?: string;
	props?: Record<string, any>;
	text?: string;
	children?: UITreeNode[];
	metadata?: Record<string, any>;
}

// Agent State
interface AgentState {
	sessionId: string;
	screenshot?: string;
	normalizedScreenshot?: string;
	regions?: DetectedRegion[];
	matches?: ComponentMatchDecision[];
	uiTree?: UITreeNode;
	generatedCode?: string;
	errors?: Array<{
		message: string;
		pipeline: string;
		timestamp: string;
	}>;
	warnings?: Array<{
		message: string;
		pipeline: string;
	}>;
	status: 'processing' | 'complete' | 'error' | 'pending_clarification';
	createdAt: string;
	updatedAt: string;
}

// Code Generation Output
interface CodeGenerationOutput {
	code: string;
	framework: 'react' | 'react-native' | 'vue';
	language: 'tsx' | 'jsx' | 'ts' | 'js';
	imports?: string[];
	components?: string[];
	metadata?: {
		generationTime?: number;
		componentCount?: number;
		fallbackCount?: number;
	};
}
```
