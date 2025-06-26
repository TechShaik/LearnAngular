import { Component } from '@angular/core';
import { MessageService } from 'primeng/api'; 
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  providers: [MessageService]
})

export class ToastComponent {
    constructor(private messageService: MessageService) {}

     showConfirm() {
    this.messageService.add({ 
      key: 'confirm', 
      sticky: true, 
      severity: 'info', 
      summary: ' Message from Shaik. You want to reply?' 
    });
  }

   onConfirm() {
    this.messageService.clear('confirm');
    alert('You clicked Reply');
  }

  onReject() {
    this.messageService.clear('confirm');
  
  }
}
