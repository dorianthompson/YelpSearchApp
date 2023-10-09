import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer rI-OR7seNQd089-Z7Dl-zeUhm1ebLikTmRJMkiupJMV7OZXRG0i9mfJzTNBNetXG7XRTT8bOarxXYUC_w2kAJgjjdqolcpNvsliXIg1s36SEgFZgPEwLGhdLofwdZXYx'
    }
});

