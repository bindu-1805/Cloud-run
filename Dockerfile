# Use official lightweight Node image
FROM node:18-alpine

# Dependency and Build
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm ci --only=production || npm install --only=production

# Copy source
COPY . .

# Cloud Run expects the container to listen on the port defined by $PORT
ENV PORT=8080
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]
