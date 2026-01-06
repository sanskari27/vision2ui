"""FastAPI server for vision2ui fil-react-component metadata.

This server provides REST API endpoints for accessing fil-react-component
React UI component library metadata. It runs on port 9400 by default and
can be extended with additional features.
"""

import os
from pathlib import Path

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse
from pydantic import BaseModel
from services import ComponentService

# Initialize FastAPI app
app = FastAPI(
    title="vision2ui fil-react-component Metadata API",
    description="REST API for accessing fil-react-component React UI component library documentation",
    version="0.1.0",
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify actual origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the shared component service for fil-react-component
component_service = ComponentService()


# Pydantic models for request/response
class ComponentListResponse(BaseModel):
    """Response model for fil-react-component list."""

    components: list[str]
    count: int


class ComponentContentResponse(BaseModel):
    """Response model for fil-react-component content."""

    component_name: str
    content: str


class ErrorResponse(BaseModel):
    """Error response model."""

    error: str
    detail: str


@app.get("/", tags=["Health"])
async def root() -> dict[str, str]:
    """Root endpoint with API information."""
    return {
        "name": "vision2ui fil-react-component Metadata API",
        "version": "0.1.0",
        "status": "running",
        "description": "API for accessing fil-react-component React UI component library documentation",
    }


@app.get("/health", tags=["Health"])
async def health() -> dict[str, str]:
    """Health check endpoint."""
    return {"status": "healthy"}


@app.get(
    "/components",
    response_model=ComponentListResponse,
    tags=["Components"],
    summary="List all available fil-react-components",
    description="Returns a sorted list of all fil-react-component names available in the metadata directory from the fil-react-component React UI component library.",
)
async def list_components() -> ComponentListResponse:
    """List all available fil-react-components."""
    components = component_service.list_components()
    return ComponentListResponse(components=components, count=len(components))


@app.post(
    "/components/upload",
    tags=["Components"],
    summary="Upload a new component documentation file",
    description="Uploads a component documentation file in format <component_name>-<version>.md",
    responses={
        400: {"model": ErrorResponse, "description": "Invalid file format or filename"},
        409: {"model": ErrorResponse, "description": "Component file already exists"},
    },
)
async def upload_component(file: UploadFile = File(...)) -> dict[str, str]:
    """Upload a new component documentation file.

    The file must be named in the format <component_name>-<version>.md
    (e.g., Button-3.4.2.md).
    """
    try:
        # Validate file extension
        if not file.filename or not file.filename.endswith(".md"):
            raise HTTPException(
                status_code=400,
                detail="File must have .md extension and be named <component_name>-<version>.md",
            )

        # Read file content
        content = await file.read()
        content_str = content.decode("utf-8")

        # Add component using the service
        component_name = component_service.add_component(file.filename, content_str)

        return {
            "message": "Component uploaded successfully",
            "component_name": component_name,
            "filename": file.filename,
        }
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to upload component: {str(e)}"
        )


@app.get(
    "/components/{component_name}",
    response_model=ComponentContentResponse,
    tags=["Components"],
    summary="Get fil-react-component documentation",
    description="Returns the full markdown documentation for a specific fil-react-component from the fil-react-component React UI component library.",
    responses={
        404: {"model": ErrorResponse, "description": "fil-react-component not found"},
    },
)
async def get_component_content(component_name: str) -> ComponentContentResponse:
    """Get the full documentation for a fil-react-component."""
    try:
        content = component_service.get_component_content(component_name)
        return ComponentContentResponse(component_name=component_name, content=content)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))


@app.get(
    "/components/{component_name}/exists",
    tags=["Components"],
    summary="Check if fil-react-component exists",
    description="Returns whether a fil-react-component with the given name exists in the fil-react-component React UI component library.",
)
async def component_exists(component_name: str) -> dict[str, bool]:
    """Check if a fil-react-component exists."""
    exists = component_service.component_exists(component_name)
    return {"exists": exists}


@app.get(
    "/prompts/metadata-generation",
    response_class=PlainTextResponse,
    tags=["Prompts"],
    summary="Get metadata generation prompt",
    description="Returns the metadata generation prompt template used for creating component documentation.",
    responses={
        404: {"model": ErrorResponse, "description": "Prompt file not found"},
    },
)
async def get_metadata_generation_prompt() -> str:
    """Get the metadata generation prompt template."""
    # Get the directory where this file is located
    current_file = Path(__file__).resolve()
    server_dir = current_file.parent
    # Go up to vision2ui-server root, then to prompts directory
    prompts_dir = server_dir.parent / "prompts"
    prompt_file = prompts_dir / "metadata-generation-prompt.md"

    if not prompt_file.exists():
        raise HTTPException(
            status_code=404, detail=f"Prompt file not found at: {prompt_file}"
        )

    try:
        with open(prompt_file, "r", encoding="utf-8") as f:
            content = f.read()
        return content
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to read prompt file: {str(e)}"
        )


def run(host: str = "0.0.0.0", port: int = 9400) -> None:
    """Run the FastAPI server using uvicorn.

    This server provides REST API access to fil-react-component React UI
    component library documentation.

    :param host: Host to bind to (default: 0.0.0.0).
    :param port: Port to bind to (default: 9400, within the range 9346-9423).
    """
    import uvicorn

    uvicorn.run(app, host=host, port=port)


if __name__ == "__main__":
    run()
