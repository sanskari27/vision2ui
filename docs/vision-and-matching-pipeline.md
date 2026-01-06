# Vision & Matching Pipeline

This document covers three interconnected pipelines: Screenshot Ingestion & Normalization, Vision & Region Detection, and Component Matching & Decision.

## Pipeline 2: Screenshot Ingestion & Normalization

### Purpose

Standardize screenshots to improve vision and matching accuracy. Consistent input format reduces variability in downstream processing.

### Inputs

* Raw UI screenshot (PNG, JPG, WebP)

### Processing Steps

1. **Resize to standard width**
   - Maintain aspect ratio
   - Target width: 1920px (configurable)

2. **Remove OS/browser chrome**
   - Detect and crop window decorations
   - Remove browser UI elements (address bar, tabs, etc.)

3. **Normalize brightness and contrast**
   - Apply histogram equalization if needed
   - Ensure consistent lighting conditions

4. **Optional background cleanup**
   - Remove noise
   - Enhance edges

### Pipeline Flow

```mermaid
graph TD
    A[Raw Screenshot] --> B[Resize to Standard Width]
    B --> C[Detect OS/Browser Chrome]
    C --> D[Remove Chrome]
    D --> E[Normalize Brightness/Contrast]
    E --> F[Optional: Background Cleanup]
    F --> G[Normalized Screenshot]
    
    style B fill:#e1f5ff
    style D fill:#fff4e1
    style G fill:#e8f5e9
```

### Outputs

* Normalized screenshot ready for vision processing

---

## Pipeline 3: Vision & Region Detection

### Purpose

Understand the structure of the UI screenshot by identifying distinct UI regions and their semantic types.

### Processing Steps

1. **Pass screenshot to multimodal vision model**
   - Use GPT-4 Vision, Claude Vision, or similar
   - Request structured region detection

2. **Detect UI regions**
   - Identify buttons, cards, lists, inputs, text blocks
   - Generate bounding boxes with coordinates

3. **Produce structured output**
   - Region ID, type, bounding box coordinates
   - Optional: text content, styling hints

### Pipeline Flow

```mermaid
graph TD
    A[Normalized Screenshot] --> B[Vision Model API]
    B --> C[Region Detection Prompt]
    C --> D[Parse Structured Response]
    D --> E[Validate Bounding Boxes]
    E --> F{Valid?}
    F -->|No| G[Error: Invalid Detection]
    F -->|Yes| H[Region List]
    
    H --> I[Region 1: Button]
    H --> J[Region 2: Card]
    H --> K[Region N: ...]
    
    style B fill:#e1f5ff
    style D fill:#fff4e1
    style H fill:#e8f5e9
```

### Output Schema

See [Data Contracts](./data-contracts.md#detected-region-schema) for the complete schema.

Example:
```json
[
  { 
    "regionId": "r1", 
    "type": "Button", 
    "box": [100, 200, 150, 40],
    "text": "Sign In"
  },
  { 
    "regionId": "r2", 
    "type": "Card", 
    "box": [50, 50, 400, 300]
  }
]
```

### Vision Model Considerations

* **Prompt Engineering**: Provide clear examples of desired output format
* **Token Limits**: Consider image compression if needed
* **Cost Optimization**: Batch processing or caching where possible
* **Fallback Strategies**: Handle API failures gracefully

---

## Pipeline 4: Component Matching & Decision Engine

### Purpose

Decide whether a detected region maps to a known component from the component library.

### Processing Steps

1. **Generate embedding for each detected region**
   - Crop region from normalized screenshot
   - Generate vector embedding using same model as component preprocessing

2. **Perform vector similarity search**
   - Query vector database with region embedding
   - Retrieve top-k candidate components

3. **Rank matches by confidence**
   - Calculate similarity scores
   - Apply component-specific thresholds

4. **Apply decision logic**
   - If confidence ≥ component.minConfidence → use component
   - Else → fallback to layout generation

### Pipeline Flow

```mermaid
graph TD
    A[Detected Regions] --> B[For Each Region]
    B --> C[Crop Region from Screenshot]
    C --> D[Generate Region Embedding]
    D --> E[Vector Similarity Search]
    E --> F[Retrieve Top-K Candidates]
    F --> G[Calculate Confidence Scores]
    G --> H{Confidence >= Threshold?}
    
    H -->|Yes| I[Decision: USE_COMPONENT]
    H -->|No| J[Decision: FALLBACK_LAYOUT]
    
    I --> K[Component Match Result]
    J --> L[Layout Generation Result]
    
    K --> M[Decision List]
    L --> M
    
    style D fill:#e1f5ff
    style E fill:#fff4e1
    style H fill:#ffe1f5
    style M fill:#e8f5e9
```

### Decision Logic

```mermaid
flowchart TD
    A[Region Embedding] --> B[Search Component Index]
    B --> C[Top Match Found?]
    C -->|No| D[FALLBACK_LAYOUT]
    C -->|Yes| E{Confidence >= minConfidence?}
    E -->|Yes| F[USE_COMPONENT]
    E -->|No| G{Confidence >= 0.6?}
    G -->|Yes| H[FLAG_FOR_REVIEW]
    G -->|No| D
    
    style F fill:#e8f5e9
    style D fill:#ffebee
    style H fill:#fff9c4
```

### Output Schema

See [Data Contracts](./data-contracts.md#component-match-decision-schema) for the complete schema.

Example:
```json
{
  "regionId": "r1",
  "decision": "USE_COMPONENT",
  "component": {
    "id": "primary-button",
    "componentName": "PrimaryButton",
    "confidence": 0.92
  },
  "props": {
    "size": "md"
  }
}
```

### Matching Strategies

#### Strategy 1: Pure Vector Similarity
* Pros: Fast, works well for visual similarity
* Cons: May miss semantic matches

#### Strategy 2: Hybrid (Vector + Type Matching)
* Pros: More accurate, reduces false positives
* Cons: Requires type classification

#### Strategy 3: Multi-Embedding (Visual + Text)
* Pros: Best accuracy, handles text-heavy components
* Cons: More complex, higher cost

### Confidence Thresholds

* **High Confidence (≥0.85)**: Auto-apply component
* **Medium Confidence (0.70-0.84)**: Apply with review flag
* **Low Confidence (<0.70)**: Fallback to layout generation

### Fallback Behavior

When no component match is found:
* Generate semantic HTML/CSS
* Use design system tokens (colors, spacing)
* Create reusable structure for future component extraction

## Integration Flow

```mermaid
graph LR
    A[Screenshot] --> B[Normalize]
    B --> C[Detect Regions]
    C --> D[Match Components]
    D --> E[Generate Decisions]
    
    F[Component Index] -.-> D
    
    style A fill:#e1f5ff
    style E fill:#e8f5e9
```

## Error Handling

* **Invalid Screenshot**: Return clear error message
* **No Regions Detected**: Suggest manual annotation
* **Vision API Failure**: Retry with exponential backoff
* **Vector DB Unavailable**: Use cached component index

## Performance Optimization

* **Parallel Processing**: Process multiple regions simultaneously
* **Caching**: Cache embeddings for repeated regions
* **Batch Operations**: Batch vector database queries
* **Early Termination**: Skip low-confidence regions quickly

