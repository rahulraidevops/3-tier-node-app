FROM node:18-slim
WORKDIR /app
COPY package*.json ./
Run npm install --production
COPY . .
EXPOSE 5000
ENV PORT=5000
CMD ["npm", "start"]
