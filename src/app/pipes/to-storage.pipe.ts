import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'toStorage'
})
export class ToStoragePipe implements PipeTransform {
  transform(value: string,): unknown {
    return environment.STORAGE_URL + `/audio-book-fe653.appspot.com/o/posters%2F${value}.jpg?alt=media`;
  }
}
