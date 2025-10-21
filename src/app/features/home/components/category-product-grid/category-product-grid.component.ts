import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../../core/models/product.model';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

interface ProductCategoryGroup {
  categoryId: string;
  categoryName: string;
  brands: { name: string; link: string }[];
  products: Product[];
}

@Component({
  selector: 'app-category-product-grid',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './category-product-grid.component.html',
  styleUrls: ['./category-product-grid.component.scss']
})
export class CategoryProductGridComponent {

  categoryGroups: ProductCategoryGroup[] = [
    {
      categoryId: 'dien-thoai', categoryName: 'ĐIỆN THOẠI',
      brands: [
        { name: 'Apple', link: '/products/dien-thoai/apple' }, { name: 'Samsung', link: '/products/dien-thoai/samsung' },
        { name: 'Xiaomi', link: '/products/dien-thoai/xiaomi' }, { name: 'OPPO', link: '/products/dien-thoai/oppo' },
      ],
      products: [
        { id: '1', name: 'iPhone 16 Pro Max 256GB | Chính hãng VN/A', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max_2.png', price: 34990000, oldPrice: 38990000, discountTag: '-11%', rating: 4.9, reviewCount: 512, savingAmount: 4000000, isGenuine: true, hasFastDelivery: true },
        { id: '5', name: 'Samsung Galaxy S25 Ultra 512GB', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_3__4.png', price: 33990000, oldPrice: 37990000, discountTag: 'Mới nhất', rating: 4.8, reviewCount: 215, savingAmount: 4000000, isGenuine: true, hasFastDelivery: true },
        { id: '4', name: 'iPhone 15 128GB - Hồng', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus-256gb-color-pink-image_3_1.png', price: 18990000, oldPrice: 21990000, discountTag: 'Giá tốt', rating: 4.7, reviewCount: 1024, savingAmount: 3000000, isGenuine: true, hasFastDelivery: true },
        { id: '9', name: 'Xiaomi 15 Pro', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-15t-pro-5g_1.jpg', price: 25990000, oldPrice: 28990000, discountTag: '-10%', rating: 4.7, reviewCount: 150, savingAmount: 3000000, isGenuine: true, hasFastDelivery: true },
        { id: '10', name: 'OPPO Find X8 Pro', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-oppo-find-x8-pro_2_.png', price: 27990000, oldPrice: 30990000, discountTag: 'Camera', rating: 4.8, reviewCount: 120, savingAmount: 3000000, isGenuine: true, hasFastDelivery: true },
        { id: '11', name: 'Google Pixel 9 Pro', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-google-pixel-9-pro_2_.png', price: 29990000, oldPrice: 32990000, discountTag: 'AI Phone', rating: 4.9, reviewCount: 90, savingAmount: 3000000, isGenuine: true, hasFastDelivery: true },
        { id: '12', name: 'Samsung Galaxy Z Fold 7', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-fold-7-xanh.jpg', price: 42990000, oldPrice: 46990000, discountTag: 'Gập Mới', rating: 4.8, reviewCount: 85, savingAmount: 4000000, isGenuine: true, hasFastDelivery: true },
        { id: '13', name: 'iPhone 16 128GB', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png', price: 21990000, oldPrice: 24990000, discountTag: '-12%', rating: 4.7, reviewCount: 300, savingAmount: 3000000, isGenuine: true, hasFastDelivery: true },
      ]
    },
    {
      categoryId: 'laptop', categoryName: 'LAPTOP',
      brands: [
        { name: 'MacBook', link: '/products/laptop/macbook' }, { name: 'ASUS', link: '/products/laptop/asus' },
        { name: 'Dell', link: '/products/laptop/dell' }, { name: 'HP', link: '/products/laptop/hp' },
      ],
      products: [
        { id: '6', name: 'MacBook Air M4 13-inch 16GB/512GB', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_2__9_14_1.png', price: 32990000, oldPrice: 35990000, discountTag: 'Chip M4', rating: 4.9, reviewCount: 150, savingAmount: 3000000, isGenuine: true, hasFastDelivery: true },
        { id: '3', name: 'Laptop Gaming ASUS ROG Zephyrus G16 (2025)', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_50__2_8.png', price: 55990000, oldPrice: 61990000, discountTag: 'RTX 5060', rating: 4.8, reviewCount: 55, savingAmount: 6000000, isGenuine: true, hasFastDelivery: true },
        { id: '14', name: 'Dell XPS 14 (2025)', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_5__9_118.png', price: 48990000, oldPrice: 52990000, discountTag: 'Mới 2025', rating: 4.8, reviewCount: 65, savingAmount: 4000000, isGenuine: true, hasFastDelivery: true },
        { id: '15', name: 'HP Spectre x360 14 (2025)', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_7__2_204.png', price: 41990000, oldPrice: 45990000, discountTag: 'Xoay gập', rating: 4.7, reviewCount: 70, savingAmount: 4000000, isGenuine: true, hasFastDelivery: true },
        { id: '16', name: 'MacBook Pro 16 inch M4 Pro', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook-pro-16-inch-2021-m1-max-32gpu-64gb-4tb-1.jpg', price: 65990000, oldPrice: 70990000, discountTag: 'M4 Pro', rating: 4.9, reviewCount: 110, savingAmount: 5000000, isGenuine: true, hasFastDelivery: true },
        { id: '17', name: 'ASUS Zenbook Duo (2025)', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_6__2_241.png', price: 39990000, oldPrice: 43990000, discountTag: '2 Màn hình', rating: 4.7, reviewCount: 40, savingAmount: 4000000, isGenuine: true, hasFastDelivery: true },
        { id: '18', name: 'Lenovo Yoga Slim 7i (2025)', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/1/0/10h01_1_1.png', price: 25990000, oldPrice: 28990000, discountTag: 'Mỏng nhẹ', rating: 4.6, reviewCount: 80, savingAmount: 3000000, isGenuine: true, hasFastDelivery: true },
        { id: '19', name: 'Microsoft Surface Laptop 7', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/i/microsoft-surface-laptop-studio.png', price: 31990000, oldPrice: 34990000, discountTag: 'Windows 12', rating: 4.7, reviewCount: 50, savingAmount: 3000000, isGenuine: true, hasFastDelivery: true },
      ]
    },
    // --- THÊM DANH MỤC MÁY TÍNH BẢNG ---
    {
      categoryId: 'tablet', categoryName: 'MÁY TÍNH BẢNG',
      brands: [
        { name: 'iPad', link: '/products/tablet/ipad' }, { name: 'Samsung', link: '/products/tablet/samsung' },
        { name: 'Xiaomi', link: '/products/tablet/xiaomi' }, { name: 'Lenovo', link: '/products/tablet/lenovo' },
      ],
      products: [
        { id: '8', name: 'iPad Pro M4 11-inch Wifi 256GB', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_100_1_2__2_2.png', price: 28990000, oldPrice: 31990000, discountTag: 'Pro M4', rating: 4.9, reviewCount: 180, savingAmount: 3000000, isGenuine: true, hasFastDelivery: true },
        { id: '20', name: 'Samsung Galaxy Tab S10 Ultra', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-tinh-bang-samsung-galaxy-tab-s10-plus-5g_2.png', price: 25990000, oldPrice: 28990000, discountTag: 'Màn hình lớn', rating: 4.8, reviewCount: 115, savingAmount: 3000000, isGenuine: true, hasFastDelivery: true },
        { id: '21', name: 'Xiaomi Pad 7 Pro', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-pad-7-pro_1_.png', price: 12990000, oldPrice: 14990000, discountTag: 'Snapdragon 8 Gen 3', rating: 4.7, reviewCount: 205, savingAmount: 2000000, isGenuine: true, hasFastDelivery: true },
        { id: '22', name: 'iPad Air M3 13-inch Wifi 128GB', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-air-m3-11-inch_2_.jpg', price: 18990000, oldPrice: 20990000, discountTag: 'Air M3', rating: 4.8, reviewCount: 250, savingAmount: 2000000, isGenuine: true, hasFastDelivery: true },
        { id: '23', name: 'Lenovo Tab P12 Pro', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/e/lenovo-tab-p11-pro.jpg', price: 15990000, oldPrice: 17990000, discountTag: 'OLED 120Hz', rating: 4.6, reviewCount: 95, savingAmount: 2000000, isGenuine: true, hasFastDelivery: true },
        { id: '24', name: 'Samsung Galaxy Tab A10 (2025)', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-tab-s10-lite-wifi-gray.jpg', price: 6990000, oldPrice: 7990000, discountTag: 'Giá rẻ', rating: 4.5, reviewCount: 310, savingAmount: 1000000, isGenuine: true, hasFastDelivery: true },
        { id: '25', name: 'iPad Mini 7 Wifi 128GB', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad_mini_blue_pdp_image_position_2_cellular__vn-vi_2.jpg', price: 13990000, oldPrice: 15990000, discountTag: 'Nhỏ gọn', rating: 4.7, reviewCount: 190, savingAmount: 2000000, isGenuine: true, hasFastDelivery: true },
        { id: '26', name: 'Xiaomi Redmi Pad SE 2', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-pad-se_1_3.png', price: 4990000, oldPrice: 5990000, discountTag: 'Giải trí', rating: 4.6, reviewCount: 220, savingAmount: 1000000, isGenuine: true, hasFastDelivery: true },
      ]
    },
    // --- THÊM DANH MỤC PHỤ KIỆN ---
    {
      categoryId: 'accessory', categoryName: 'PHỤ KIỆN',
      brands: [
        { name: 'Apple', link: '/products/accessory/apple' }, { name: 'Samsung', link: '/products/accessory/samsung' },
        { name: 'Sony', link: '/products/accessory/sony' }, { name: 'JBL', link: '/products/accessory/jbl' },
      ],
      products: [
         { id: '7', name: 'Tai nghe Sony WH-1000XM6 Wireless', imageUrl: 'https://www.sony.com.vn/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF', price: 8490000, oldPrice: 9490000, discountTag: 'Âm thanh Hi-Res', rating: 4.8, reviewCount: 302, savingAmount: 1000000, isGenuine: true, hasFastDelivery: true },
         { id: '27', name: 'Apple Watch Series 11 41mm GPS', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/h/o/hong_3_13.png', price: 10990000, oldPrice: 12990000, discountTag: 'Mới 2025', rating: 4.9, reviewCount: 150, savingAmount: 2000000, isGenuine: true, hasFastDelivery: true },
         { id: '28', name: 'Loa Bluetooth JBL Charge 6', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/j/b/jbl-charge-6-bl.png', price: 3490000, oldPrice: 3990000, discountTag: 'Chống nước', rating: 4.7, reviewCount: 280, savingAmount: 500000, isGenuine: true, hasFastDelivery: true },
         { id: '29', name: 'Sạc dự phòng Anker PowerCore 20000mAh', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_640_3__1.png', price: 990000, oldPrice: 1290000, discountTag: 'Sạc nhanh', rating: 4.8, reviewCount: 500, savingAmount: 300000, isGenuine: true, hasFastDelivery: true },
         { id: '30', name: 'Apple Pencil Pro (2025)', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_93__1_3.png', price: 3490000, oldPrice: 3990000, discountTag: 'Cho iPad', rating: 4.9, reviewCount: 120, savingAmount: 500000, isGenuine: true, hasFastDelivery: true },
         { id: '31', name: 'Bàn phím Logitech MX Keys S', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/b/a/ban-phim-khong-day-fullsize-logitech-mx-keys-s-5.png', price: 2490000, oldPrice: 2790000, discountTag: 'Văn phòng', rating: 4.8, reviewCount: 350, savingAmount: 300000, isGenuine: true, hasFastDelivery: true },
         { id: '32', name: 'Chuột Logitech MX Master 4S', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/h/chuot-khong-day-logitech-mx-master-2s_3.png', price: 2190000, oldPrice: 2490000, discountTag: 'Cao cấp', rating: 4.9, reviewCount: 410, savingAmount: 300000, isGenuine: true, hasFastDelivery: true },
         { id: '33', name: 'Củ sạc nhanh GaN Anker 100W', imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/b/a/baeseus-1.png', price: 1190000, oldPrice: 1490000, discountTag: 'GaN Tech', rating: 4.7, reviewCount: 290, savingAmount: 300000, isGenuine: true, hasFastDelivery: true },
      ]
    },
  ];
}
