import {InMemoryDbService} from 'angular2-in-memory-web-api';
import {Photo} from '../app/model/photo';
import {User} from '../app/model/user';

// The in-memory web API is only useful in the early stages of development and for
// demonstrations such as this Tour of Heroes. Don't worry about the details of
// this backend substitution; you can skip it when you have a real web API server.

export class TestData implements InMemoryDbService{
  createDb() {
    let photos:Photo[] = [];
    let photoOne:Photo = new Photo(1,'Photo One','Image One','Photo Title One','This is photo One');
    let photoTwo:Photo = new Photo(2,'Photo Two','Image Two','Photo Title Two','This is photo Two');
    let photoThree:Photo = new Photo(3,'Photo Three','Image Three','Photo Title Three','This is photo Three');
    photos.push(photoOne);
    photos.push(photoTwo);
    photos.push(photoThree);
    photos.push(new Photo(4,'Photo Four','Image Four','Photo Title Four','This is photo Four'));
    photos.push(new Photo(5,'Photo Five','Image Five','Photo Title Five','This is photo Five'));


    let users:User[] = [];
    let wilkins:User = new User(1,'Wilkins','Liang','100200');
    wilkins.addPhoto(photoOne);
    wilkins.addPhoto(photoTwo);
    wilkins.addPhoto(photoThree);
    users.push(wilkins);
    users.push(new User(2,'Vicky','Zhang','100200'));
    users.push(new User(3,'Tony','Zha','100200'));
    users.push(new User(4,'Jacky','Chan','100200'));



    return {photos,users};
  }

}
