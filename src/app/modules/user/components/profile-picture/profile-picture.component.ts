import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Response } from 'src/app/core/models';

import { SnackbarService, UserService } from 'src/app/core/services';

export interface DialogData {
  user: any;
}

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {

  fileToUpload: any;
  imageUrl: any;
  @ViewChild('fileUpload') fileUpload: ElementRef | undefined;
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ProfilePictureComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public userData: DialogData,
    private snackBar: SnackbarService
  ) {
    console.log('userData', userData);
  }

  ngOnInit(): void {
  }

  handleChooseFileClick(event: any) {
    if (this.fileUpload)
      this.fileUpload.nativeElement.click()
  }

  handleFileInput(event: any) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.fileToUpload = file;

    // Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  handleUploadProfilePicture() {
    console.log('this.userData', this.userData);
    const data = new FormData();
    data.append('file', this.fileToUpload);
    data.append('_id', this.userData.user._id);
    this.isLoading = true;
    this.userService.uploadProfilePicture(data).subscribe((res: Response) => {
      this.snackBar.openSnackBar(res?.message!, 'Close', 'green-snackbar');
      this.userService.profilePicUploaded(true);
      this.dialogRef.close();
      this.isLoading = false;
    });
  }
}
