import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer R7XRCulyHd3PqWMPL1PTDibg6gZQsA7noS4fbw6cVu6-Ti_-msbjhxzWgquO6kKjuiRayg0pqDZibvfKWLojRMhrC1ysQRrgFXt9Fi6D0FRuqcM7WJsXE5ZhyKldYXYx'
    }
});

