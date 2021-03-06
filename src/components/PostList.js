import React, { Component } from 'react';

import '../styles/PostList.css';
import Post from './Post';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "Conteúdo do comentário"
          }
        ],
      }
    ]
  };

  render() {
    return (
      <div className="feed">
        <div className="feed-body">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}
