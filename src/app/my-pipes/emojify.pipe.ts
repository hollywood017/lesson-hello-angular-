import { Pipe, PipeTransform } from '@angular/core';

        // in a template you use the pipe like this:
        //{{userName | emojify}}
        //                |
        //  ---------------
@Pipe({ //  |
  name: 'emojify'
})  // the "name" setting specifies how to use it
export class EmojifyPipe implements PipeTransform {
      // The logic of our pipe goes inside the "transform()" method.

      //    "I like pizza and fencing" -> "I like 🍕 and 🤺"
      // {{ "I like pizza and fencing" | emojify }}

  transform(value: any, args?: any): any {
    return value.replace(/pizza/ig, '🍕')
                .replace(/fencing/ig,'🤺')
                .replace(/gun/ig, '🔫')
                .replace(/avocado/ig, '🥑')
                .replace(/wine glass/ig, '🍷')
                .replace(/rocket/ig, '🚀');
  }

}
