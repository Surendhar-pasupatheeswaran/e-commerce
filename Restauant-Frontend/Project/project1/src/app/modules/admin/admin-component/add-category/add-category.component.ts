import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  categoryForm: FormGroup;

  constructor(private service: AdminService) {}

  ngOnInit() {
    this.categoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    // Display image preview
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.imagePreview = null;
    }
  }

  onUpload() {
    if (this.selectedFile && this.categoryForm.valid) {
      this.service.uploadImage(this.selectedFile, this.categoryForm.value.name, this.categoryForm.value.description).subscribe(
        (response) => {
          console.log('Image uploaded successfully:', response);

          // Optionally reset the form after successful upload
          this.categoryForm.reset();
          this.selectedFile = null;
          this.imagePreview = null;
        },
        (error) => {
          console.log('Error uploading image', error);
        }
      );
    }
  }

}
