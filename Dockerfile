# Use Node.js Alpine base image
FROM node:alpine3.18

# Set the working directory
WORKDIR /app

# Copy package.json first
COPY package.json ./

# Check if package-lock.json exists before copying
COPY package-lock.json ./ || true

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 4000

# Start the application
CMD ["npm", "run", "start"]
