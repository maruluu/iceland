# Iceland Travel Site

This project displays an Iceland travel itinerary that relies on a Google Maps API key. The deployed site provides the key through GitHub Actions.

## Local Development

1. Copy `const.example.js` to `const.js` in the project root:
   
   ```bash
   cp const.example.js const.js
   ```

2. Replace `__REPLACE_ME__` with your own Google Maps API key inside `const.js`.

The file `const.js` is ignored by Git and should not be committed.

## CI Workflow

The GitHub Actions workflow generates `const.js` automatically using the secret `GOOGLE_MAPS_API_KEY` during deployment.
