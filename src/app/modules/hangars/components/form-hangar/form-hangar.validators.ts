// import { AbstractControl, ValidationErrors } from '@angular/forms';
// import { HangarService } from './../../../../core/services/hangar.service';
// export class HangarAsyncValidators {
//   static shouldBeUnique(hangarService: HangarService) {
//     return (control: AbstractControl): Promise<ValidationErrors | null> => new Promise(
//       (resolve, reject) => {
//         hangarService.hangarExistByName(control.value as string)
//         .subscribe(response => {
//           console.log(response);
//           if (response) {
//             resolve({shouldBeUnique: true});
//           } else {
//             resolve(null);
//           }
//         });
//     });
//   }
// }
