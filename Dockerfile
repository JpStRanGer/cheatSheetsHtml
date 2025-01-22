 
# Use a lightweight Python base image
FROM python:3.9-slim

# Metadata for the image
LABEL maintainer="Your Name <your.email@example.com>"
LABEL version="1.0"
LABEL description="A lightweight HTTP server to serve local files using Python's built-in HTTP server."

# Set the working directory inside the container
WORKDIR /app

# Copy the current directory contents to the container
COPY . /app

# Expose the port on which the server will run
EXPOSE 8000

# Set environment variables for configurability
ENV HTTP_PORT=8000

# Add an entrypoint script for flexibility
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Define the default command to run the server
CMD ["/entrypoint.sh"]
