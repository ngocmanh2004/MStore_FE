import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-flash-sale-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './flash-sale-banner.component.html',
  styleUrls: ['./flash-sale-banner.component.scss']
})
export class FlashSaleBannerComponent implements OnInit, OnDestroy {

  private timerSubscription: Subscription | null = null;
  // --- Đặt thời gian kết thúc Flash Sale ở đây ---
  // Ví dụ: Kết thúc vào cuối ngày 31/10/2025
  private saleEndDate = new Date('2025-10-31T23:59:59'); 
  // ---------------------------------------------

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Chỉ chạy timer trên trình duyệt
    if (isPlatformBrowser(this.platformId)) {
      this.startTimer();
    } else {
      // Hiển thị giá trị tĩnh trên server để tránh lỗi
      this.updateTimerDisplay(this.calculateTimeLeft()); 
    }
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startTimer(): void {
    this.timerSubscription = interval(1000) // Cập nhật mỗi giây
      .pipe(
        map(() => this.calculateTimeLeft())
      )
      .subscribe(timeLeft => {
        this.updateTimerDisplay(timeLeft);
        if (timeLeft <= 0) {
          this.timerSubscription?.unsubscribe();
          // Có thể thêm logic khi hết giờ (ví dụ: ẩn banner)
        }
      });
  }

  calculateTimeLeft(): number {
    const now = new Date().getTime();
    const distance = this.saleEndDate.getTime() - now;
    return Math.max(0, distance); // Trả về 0 nếu đã qua thời gian
  }

  updateTimerDisplay(timeLeft: number): void {
    this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  }

  // Hàm format số (thêm số 0 nếu < 10)
  formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}