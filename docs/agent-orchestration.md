# Agent Orchestration

## Purpose

Coordinate pipeline execution, make high-level decisions, and enforce system rules. The agent acts as the central orchestrator that manages the flow from screenshot input to final code output.

## Role of the Agent

* **Coordinate pipeline execution** - Manage the sequence and dependencies of all pipelines
* **Decide between component usage vs fallback** - Apply business logic for edge cases
* **Ask clarifying questions** (future) - Interactive refinement when confidence is low
* **Enforce safety and rules** - Validate outputs, prevent unsafe code generation

## Suggested Framework

**LangGraph** - State-machine driven agents that provide:
* Explicit state management
* Conditional branching
* Error recovery
* Human-in-the-loop support

## Agent State Machine

```mermaid
stateDiagram-v2
    [*] --> ReceiveScreenshot
    ReceiveScreenshot --> ValidateInput
    ValidateInput --> NormalizeScreenshot: Valid
    ValidateInput --> ErrorState: Invalid
    
    NormalizeScreenshot --> DetectRegions
    DetectRegions --> MatchComponents
    MatchComponents --> ReviewDecisions
    
    ReviewDecisions --> GenerateUITree: All High Confidence
    ReviewDecisions --> RequestClarification: Low Confidence
    ReviewDecisions --> PartialGeneration: Mixed Confidence
    
    RequestClarification --> GenerateUITree: User Responded
    PartialGeneration --> GenerateUITree
    
    GenerateUITree --> GenerateCode
    GenerateCode --> ValidateOutput
    ValidateOutput --> Complete: Valid
    ValidateOutput --> Regenerate: Invalid
    
    Regenerate --> GenerateUITree: Retry
    ErrorState --> [*]
    Complete --> [*]
```

## Orchestration Flow

```mermaid
graph TD
    A[User Uploads Screenshot] --> B[Agent: Validate Input]
    B --> C[Pipeline 2: Normalize]
    C --> D[Pipeline 3: Detect Regions]
    D --> E[Pipeline 4: Match Components]
    E --> F{Agent: Review Decisions}
    
    F -->|High Confidence| G[Pipeline 5: Generate UI Tree]
    F -->|Low Confidence| H[Agent: Request Clarification]
    F -->|Mixed| I[Agent: Partial Generation]
    
    H --> J[User Provides Feedback]
    J --> G
    I --> G
    
    G --> K[Pipeline 6: Generate Code]
    K --> L[Agent: Validate Output]
    L --> M{Valid?}
    M -->|Yes| N[Return Code]
    M -->|No| O[Agent: Regenerate]
    O --> G
    
    style B fill:#e1f5ff
    style F fill:#ffe1f5
    style L fill:#fff4e1
    style N fill:#e8f5e9
```

## Decision Points

### 1. Input Validation

```mermaid
flowchart TD
    A[Screenshot Received] --> B{Valid Format?}
    B -->|No| C[Error: Invalid Format]
    B -->|Yes| D{Valid Dimensions?}
    D -->|No| E[Error: Dimensions Out of Range]
    D -->|Yes| F{File Size OK?}
    F -->|No| G[Error: File Too Large]
    F -->|Yes| H[Proceed to Normalization]
    
    style H fill:#e8f5e9
```

**Rules:**
* Accept: PNG, JPG, WebP
* Min dimensions: 100x100px
* Max dimensions: 10000x10000px
* Max file size: 10MB

### 2. Confidence Review

```mermaid
flowchart TD
    A[Component Matches Received] --> B{All High Confidence?}
    B -->|Yes| C[Proceed to Generation]
    B -->|No| D{Any Low Confidence?}
    D -->|Yes| E{User Interaction Enabled?}
    E -->|Yes| F[Request Clarification]
    E -->|No| G[Use Fallback Layout]
    D -->|No| H[Flag for Review]
    H --> C
    F --> I[User Response]
    I --> C
    G --> C
    
    style C fill:#e8f5e9
```

**Confidence Levels:**
* **High (≥0.85)**: Auto-proceed
* **Medium (0.70-0.84)**: Flag for review, proceed
* **Low (<0.70)**: Request clarification or fallback

### 3. Output Validation

```mermaid
flowchart TD
    A[Generated Code] --> B{Valid Syntax?}
    B -->|No| C[Error: Syntax Invalid]
    B -->|Yes| D{Uses Components?}
    D -->|No| E[Warning: No Components Used]
    D -->|Yes| F{Follows Design System?}
    F -->|No| G[Warning: Design System Violation]
    F -->|Yes| H{No Security Issues?}
    H -->|No| I[Error: Security Violation]
    H -->|Yes| J[Output Valid]
    
    C --> K[Regenerate]
    I --> K
    J --> L[Return to User]
    
    style J fill:#e8f5e9
    style K fill:#fff4e1
```

**Validation Rules:**
* Syntax must be valid for target framework
* Prefer components over raw HTML
* No hardcoded secrets or API keys
* No dangerous eval() or innerHTML usage
* Follow accessibility guidelines

## Agent Responsibilities

### Pipeline Coordination

```mermaid
sequenceDiagram
    participant User
    participant Agent
    participant P2 as Pipeline 2: Normalize
    participant P3 as Pipeline 3: Detect
    participant P4 as Pipeline 4: Match
    participant P5 as Pipeline 5: UI Tree
    participant P6 as Pipeline 6: Code Gen
    
    User->>Agent: Upload Screenshot
    Agent->>P2: Normalize(screenshot)
    P2-->>Agent: Normalized image
    Agent->>P3: DetectRegions(image)
    P3-->>Agent: Regions list
    Agent->>P4: MatchComponents(regions)
    P4-->>Agent: Match decisions
    Agent->>Agent: Review decisions
    Agent->>P5: GenerateUITree(decisions)
    P5-->>Agent: UI tree
    Agent->>P6: GenerateCode(uiTree)
    P6-->>Agent: Code output
    Agent->>Agent: Validate output
    Agent-->>User: Return code
```

### Error Recovery

The agent should handle:
* **Pipeline failures**: Retry with exponential backoff
* **Partial failures**: Continue with available data
* **Timeout errors**: Return partial results with warnings
* **Rate limiting**: Queue requests and retry

### State Management

**State Schema:**
```json
{
  "sessionId": "uuid",
  "screenshot": "base64 or path",
  "normalizedScreenshot": "path",
  "regions": [],
  "matches": [],
  "uiTree": {},
  "generatedCode": "",
  "errors": [],
  "warnings": [],
  "status": "processing|complete|error"
}
```

## Safety & Rules Enforcement

### Code Safety Checks

1. **No dangerous patterns**
   * Block: `eval()`, `innerHTML`, `dangerouslySetInnerHTML` without sanitization
   * Block: Hardcoded credentials
   * Block: Direct DOM manipulation

2. **Design System Compliance**
   * Prefer components over raw HTML
   * Use design tokens (colors, spacing)
   * Follow component prop conventions

3. **Accessibility**
   * Ensure semantic HTML
   * Include ARIA labels where needed
   * Check color contrast (future)

### Rule Configuration

Rules should be configurable:
```yaml
safety:
  blockDangerousPatterns: true
  requireComponents: true
  enforceAccessibility: true
  
designSystem:
  preferComponents: true
  allowRawHTML: false
  strictMode: false
```

## Future Enhancements

### Interactive Refinement

* **Low Confidence Handling**: Ask user to confirm component matches
* **Iterative Improvement**: Allow users to refine generated code
* **Component Suggestions**: Propose alternative components

### Learning & Adaptation

* **Feedback Loop**: Learn from user corrections
* **Component Usage Patterns**: Track which components work best
* **Confidence Calibration**: Adjust thresholds based on outcomes

### Multi-Modal Input

* **Figma Integration**: Import designs directly
* **Video Input**: Process UI animations
* **Text Descriptions**: Combine with screenshots for context

## Implementation Checklist

- [ ] Set up LangGraph state machine
- [ ] Implement input validation
- [ ] Create pipeline orchestration logic
- [ ] Add confidence review logic
- [ ] Implement output validation
- [ ] Add error recovery mechanisms
- [ ] Create state persistence (optional)
- [ ] Add logging and monitoring
- [ ] Implement safety rules
- [ ] Add configuration management

