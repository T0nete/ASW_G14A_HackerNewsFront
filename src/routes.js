import React from 'react';
import { Router, Route } from 'react-router';
import TopStories from './components/topStories/TopStories';
import AskStories from './components/askStories/AskStories';
import NewStories from './components/newStories/NewStories';
import BestStories from './components/bestStories/BestStories';
import StoryComment from './components/storyComment/StoryComment';
import UserProfile from './components/userProfile/UserProfile';

import UserContribucios from './components/userContribucios/UserContribucios';
import UserComments from './components/userComments/UserComments';
import LikedContribucios from './components/likedContribucios/LikedContribucios';
import LikedComments from './components/likedComments/LikedComments';


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

      <Route path="/usercontribucios" component={UserContribucios}></Route>
      <Route path="/comments" component={UserComments}></Route>
      <Route path="/contribucioslikedid" component={LikedContribucios}></Route>
      <Route path="/commentsliked" component={LikedComments}></Route>

  
    </Router>
  );

export default Routes;
