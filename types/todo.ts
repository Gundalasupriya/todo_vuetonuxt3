export interface TodoResponseRoot {
   dates: any;
   page: number;
   name: string;
   completed: boolean;
   data: any;
   results:TodoItem[];

}

export interface TodoItem {

  name: string;
  completed: boolean;
 
}


