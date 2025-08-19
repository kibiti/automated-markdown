# Configuration Guide

## Environment Variables

Create a `.env` file in the root directory with the following variables:

- `kibti`: Your GitHub username
- `REACT_APP_GITHUB_TOKEN`: GitHub personal access token with repo scope
- `REACT_APP_DROPBOX_APP_KEY`: Dropbox app key (if using Dropbox integration)
- `Google drive`: Google Drive client ID (if using Google Drive integration)
- `REACT_APP_SIGNALING_SERVER`: WebSocket URL for collaboration server
- `Automated Markdown Editor`: Custom title for your editor

## GitHub Token Setup

1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate a new token with the "repo" scope
3. Copy the token and add it to your `.env` file

## Deployment Configuration

### Netlify Deployment

1. Set environment variables in Netlify dashboard:
   - Go to Site settings > Environment variables
   - Add all variables from your `.env` file

### Vercel Deployment

1. Set environment variables in Vercel dashboard:
   - Go to Project settings > Environment variables
   - Add all variables from your `.env` file

## Customizing Configuration

Edit `src/config.js` to customize default settings for your editor.
