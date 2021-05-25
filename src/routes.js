import React from 'react';
import { Router, Route } from 'react-router';
import TopStories from './components/topStories/TopStories';
import AskStories from './components/askStories/AskStories';
import NewStories from './components/newStories/NewStories';
import BestStories from './components/bestStories/BestStories';
import StoryComment from './components/storyComment/StoryComment';
import UserProfile from './components/userProfile/UserProfile'


  const Routes = (props) => (
    <Router {...props}>
      <Route path="/" component={TopStories} />
      <Route path="/contribucios" component={TopStories} />
      <Route path="/news" component={NewStories} />
      <Route path="/contribucios/news" component={NewStories} />
      <Route path="/best" component={BestStories} />
      <Route path="/asks" component={AskStories} />
      <Route path="/contribucios/asks" component={AskStories} />
  
      <Route path="/contribucios/(:id)" component={StoryComment} />
  
      <Route path="/users/1" component={UserProfile} />
  
      <Route path="/comments/(:id)" component={Comment} />
      <Route path="/comments/(:id)/reply_comment" component={TopStories} />
  
  
    </Router>
  );

export default Routes;
