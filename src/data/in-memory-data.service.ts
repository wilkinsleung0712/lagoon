import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Photo} from '../app/model/photo';

// The in-memory web API is only useful in the early stages of development and for
// demonstrations such as this Tour of Heroes. Don't worry about the details of
// this backend substitution; you can skip it when you have a real web API server.


export class PhotoDataService implements InMemoryDbService {
  createDb() {
    const photos = [{
      id: 1,
      photoId: 1,
      photoName: 'Photo One',
      imageName: 'Image One',
      title: 'Photo Title One',
      description: 'This is photo One',
      commentList: [
        {
          commentId: '1',
          content: 'hellow'
        }
      ]
    },
      {
        id: 2,
        photoId: 2,
        photoName: 'Photo Two',
        imageName: 'Image Two',
        title: 'Photo Title Two',
        description: 'This is photo Two'
      },
      {
        id: 3,
        photoId: 3,
        photoName: 'Photo Three',
        imageName: 'Image Three',
        title: 'Photo Title Three',
        description: 'This is photo Three'
      },
      {
        id: 4,
        photoId: 4,
        photoName: 'Photo Four',
        imageName: 'Image Four',
        title: 'Photo Title Four',
        description: 'This is photo Four'
      },
      {
        id: 5,
        photoId: 5,
        photoName: 'Photo Five',
        imageName: 'Image Five',
        title: 'Photo Title Five',
        description: 'This is photo Five'
      }];


    // let photoOne:Photo = new Photo(1,'Photo One','Image One','Photo Title One','This is photo One');
    // let photoTwo:Photo = new Photo(2,'Photo Two','Image Two','Photo Title Two','This is photo Two');
    // let photoThree:Photo = new Photo(3,'Photo Three','Image Three','Photo Title Three','This is photo Three');
    // photos.push(photoOne);
    // photos.push(photoTwo);
    // photos.push(photoThree);
    // photos.push(new Photo(4,'Photo Four','Image Four','Photo Title Four','This is photo Four'));
    // photos.push(new Photo(5,'Photo Five','Image Five','Photo Title Five','This is photo Five'));
    //
    //
    // let users:User[] = [];
    // let wilkins:User = new User(1,'Wilkins','Liang','100200');
    // wilkins.addPhoto(photoOne);
    // wilkins.addPhoto(photoTwo);
    // wilkins.addPhoto(photoThree);
    // users.push(wilkins);
    // users.push(new User(2,'Vicky','Zhang','100200'));
    // users.push(new User(3,'Tony','Zha','100200'));
    // users.push(new User(4,'Jacky','Chan','100200'));


    return {photos};
  }
}
