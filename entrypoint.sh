ø#!/bin/bash

echo "Starting Python HTTP server on port ${HTTP_PORT}..."
echo "Serving files from: $(pwd)"
echo "--------------------------------------------------"

# Start the Python HTTP server
exec python -m http.server "${HTTP_PORT}"

