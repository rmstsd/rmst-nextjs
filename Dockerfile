# syntax=docker.io/docker/dockerfile:1

FROM node:18-alpine AS base

WORKDIR /app

COPY .next/standalone .

ENV NODE_ENV=production

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
