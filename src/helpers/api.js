import axios from 'axios';

export function getTopStories() {
  return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
}

export function getNewStories() {
  return axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
}

export function getBestStories() {
  return axios.get('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty');
}
/*
export function getStoryItem(storyId) {
  return axios.get('https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json?print=pretty');
}*/

export function getJobStories() {
  return axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty');
}

export function getJobItem(jobStoryId) {
  return axios.get('https://hacker-news.firebaseio.com/v0/item/' + jobStoryId + '.json?print=pretty');
}

//--------------------------

export function getContribucios() {
  return axios.get('https://hacker-news-g14a.herokuapp.com/contribucios.json');
}

export function getNewContribucios() {
  return axios.get('https://hacker-news-g14a.herokuapp.com/news.json');
}

export function getAskContribucios() {
  return axios.get('https://hacker-news-g14a.herokuapp.com/asks.json');
}


export function getLikedContribucios() {
  return axios.get('https://hacker-news-g14a.herokuapp.com/contribucios?likedid=1.json');
}


export function getUserId() {
  return axios.get('https://hacker-news-g14a.herokuapp.com/users/1.json');
}

export function getUserContribucios() {
  return axios.get('https://hacker-news-g14a.herokuapp.com/contribucios?userid=1.json');
}

export function getUserComments() {
  return axios.get('https://hacker-news-g14a.herokuapp.com/comments.json');
}

export function getrUserLikedComments() {
  return axios.get('https://hacker-news-g14a.herokuapp.com/comments?commentedid=1.json');
}




/*
export function getNewStories() {
  return axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
}

export function getBestStories() {
  return axios.get('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty');
}

export function getStoryItem(storyId) {
  return axios.get('https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json?print=pretty');
}

export function getJobStories() {
  return axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty');
}

export function getJobItem(jobStoryId) {
  return axios.get('https://hacker-news.firebaseio.com/v0/item/' + jobStoryId + '.json?print=pretty');
}
*/