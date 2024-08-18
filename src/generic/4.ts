/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Props<T> {
  title: string;
  data: T;
}
class Component<T> {
  constructor (public props: Props<T>) {

  }
}

class Page extends Component<any> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};