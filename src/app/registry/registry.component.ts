import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.css'
})
export class RegistryComponent {
  guestName: string = '';
  guestMessage: string = '';
  messages: { name: string; text: string; color: string }[] = [
    {
      "name": "Mikiyas Z.",
      "text": "To the honored members of Yegeta Lijoch : The developer of this site is seeking a blessed marriage. Please reach out if interested.!",
      "color": "#FFD3B5"
    },
    {
      "name": "Hana T.",
      "text": "As you begin this beautiful journey together, may the Lord be the foundation of your home. Wishing you a lifetime of love and blessings!",
      "color": "#FFAAA6"
    },
    {
      "name": "Tesfaye Alemu",
      "text": "May your love grow stronger each day, and may God be your guide in every step. Wishing you a blessed and joyful marriage!",
      "color": "#D5AAFF"
    },
    {
      "name": "Mekdes & Dawit",
      "text": "May your marriage reflect Christ’s love for the Church. Wishing you a lifetime of peace, faith, and happiness!",
      "color": "#A2D5F2"
    },
    {
      "name": "Yohannes Gebre",
      "text": "Congratulations! May God be the center of your marriage and fill your home with His divine presence and unshakable joy.",
      "color": "#F5D76E"
    },
    {
      "name": "Selamawit A.",
      "text": "May your love be as deep as the ocean and your faith as strong as the mountains. Wishing you a blessed and wonderful life together!",
      "color": "#FF9AA2"
    },
    {
      "name": "Kaleab & Betel",
      "text": "May the Lord bless and protect your union, and may your love be a testimony of His grace. Wishing you happiness and peace!",
      "color": "#FFB7B2"
    },
    {
      "name": "Elias & Mihret",
      "text": "May your marriage be a shining light for others, full of love, patience, and faith in Christ. Congratulations and God bless!",
      "color": "#FFDAC1"
    },
    {
      "name": "Binyam Samuel",
      "text": "May the Lord be your foundation, your guide, and your strength. Wishing you a joyful marriage filled with divine blessings!",
      "color": "#B5EAD7"
    },
    {
      "name": "Ruth & Henok",
      "text": "A threefold cord is not easily broken (Ecclesiastes 4:12). May your marriage be strengthened by the presence of Christ always!",
      "color": "#C7CEEA"
    }
  ]
  ;

  pastelColors = [
    '#FFD3B5', '#FFAAA6', '#D5AAFF', '#A2D5F2', '#F5D76E', 
    '#FF9AA2', '#FFB7B2', '#FFDAC1', '#B5EAD7', '#C7CEEA'
  ];

  addMessage(event: Event): void {
    event.preventDefault();
    if (this.guestName.trim() && this.guestMessage.trim()) {
      const randomColor = this.pastelColors[Math.floor(Math.random() * this.pastelColors.length)];
      this.messages.unshift({ name: this.guestName, text: this.guestMessage, color: randomColor });
      this.guestName = '';
      this.guestMessage = '';
    }
  }
}