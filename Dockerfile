# Use Node Alpine image
FROM node:alpine3.18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Ensure that .env is included (GitHub Actions must mount it)
RUN ls -la /app

# Expose the app port
EXPOSE 4000

# Run the application
CMD [ "npm", "run", "start" ]
