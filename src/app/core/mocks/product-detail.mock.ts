export const MOCK_PRODUCT_DETAIL = {
  productId: 3,
  productName: 'iPhone 15 Pro Max',
  slug: 'iphone-15-pro-max',
  description: `
    <p>iPhone 15 Pro Max là đỉnh cao của công nghệ smartphone với thiết kế titan cao cấp. Hiệu năng vượt trội từ chip A17 Pro và hệ thống camera chuyên nghiệp.</p>
    <p>Với màn hình Super Retina XDR 6.7 inch, bạn sẽ có trải nghiệm hình ảnh sống động và chân thực. Camera chính 48MP cùng tính năng zoom quang học 5x mang đến khả năng chụp ảnh và quay video đẳng cấp chuyên nghiệp.</p>
    <p>Action Button mới cho phép tùy chỉnh nhanh các tính năng yêu thích, trong khi cổng USB-C mang đến sự tiện lợi trong kết nối và sạc nhanh.</p>
  `,
  brandName: 'Apple',
  categoryName: 'Điện thoại',

  averageRating: 4.7,
  reviewCount: 3,

  availableOptions: [
    {
      id: 1,
      name: 'Dung lượng',
      values: ['256GB', '512GB']
    },
    {
      id: 2,
      name: 'Màu sắc',
      values: ['Titan Tự nhiên', 'Titan Xanh']
    }
  ],

  variants: [
    {
      variantId: 4,
      sku: 'IP15PM-256-TI',
      price: 29990000,
      oldPrice: 32990000,
      stockQuantity: 35,
      selectedOptions: [
        { name: 'Dung lượng', value: '256GB' },
        { name: 'Màu sắc', value: 'Titan Tự nhiên' }
      ],
      images: [
        { imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max-titan-tu-nhien-1-1.png' },
        { imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max-titan-tu-nhien-2.png' },
        { imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max-titan-tu-nhien-3.png' },
        { imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max-titan-tu-nhien-4.png' }
      ]
    },
    {
      variantId: 5,
      sku: 'IP15PM-512-TI',
      price: 34990000,
      oldPrice: 37990000,
      stockQuantity: 15,
      selectedOptions: [
        { name: 'Dung lượng', value: '512GB' },
        { name: 'Màu sắc', value: 'Titan Tự nhiên' }
      ],
      images: [
        { imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max-titan-tu-nhien-1-1.png' },
      ]
    },
    {
      variantId: 6,
      sku: 'IP15PM-256-BLUE',
      price: 29990000,
      oldPrice: 32990000,
      stockQuantity: 18,
      selectedOptions: [
        { name: 'Dung lượng', value: '256GB' },
        { name: 'Màu sắc', value: 'Titan Xanh' }
      ],
      images: [
        { imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max-titan-xanh-1-1.png' },
        { imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max-titan-xanh-2.png' },
      ]
    },
     {
      variantId: 7,
      sku: 'IP15PM-512-BLUE',
      price: 34990000,
      oldPrice: 37990000,
      stockQuantity: 0,
      selectedOptions: [
        { name: 'Dung lượng', value: '512GB' },
        { name: 'Màu sắc', value: 'Titan Xanh' }
      ],
      images: [
        { imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max-titan-xanh-1-1.png' },
      ]
    }
  ],

  specifications: [
    { specName: 'Màn hình', specValue: 'Super Retina XDR 6.7 inch' },
    { specName: 'Dung lượng', specValue: '256GB, 512GB, 1TB' },
    { specName: 'Chip', specValue: 'A17 Pro' },
    { specName: 'Kết nối', specValue: '5G, Wi-Fi 6E, Bluetooth 5.3' },
    { specName: 'Camera', specValue: '48MP chính, 12MP Ultra Wide, 12MP Telephoto' },
    { specName: 'Chống nước', specValue: 'IP68' },
    { specName: 'Pin', specValue: 'Lên đến 28 giờ phát video' },
    { specName: 'Hệ điều hành', specValue: 'iOS 17' }
  ],

  reviews: [
    {
      userName: 'Nguyễn Văn A',
      rating: 5,
      content: 'Sản phẩm tuyệt vời! Chất lượng camera đúg tìn, pin trâu, thiết kế đẹp. Hài lòng với lựa chọn này.',
      createdAt: '2025-07-15'
    },
    {
      userName: 'Trần Thị B',
      rating: 4,
      content: 'iPhone 15 Pro Max thực sự đáng với giá tiền. Hiệu năng mạnh mẽ, màn hình sắc nét. Chỉ là giá hơi cao.',
      createdAt: '2024-09-10'
    },
    {
      userName: 'Lê Minh C',
      rating: 5,
      content: 'Nâng cấp từ 12 và cảm thấy sự khác biệt rõ rệt. Camera zoom 5x rất hữu ích, Action Button tiện lợi.',
      createdAt: '2024-01-08'
    }
  ],

relatedProducts: [
    {
      productId: 1, // Sửa id -> productId
      name: 'iPhone 15 Pro',
      slug: 'iphone-15-pro', // Thêm slug (tạm thời)
      primaryImageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_2.png', // Sửa imageUrl -> primaryImageUrl
      price: 24990000,
      oldPrice: 28990000,
      averageRating: 4.8, // Sửa rating -> averageRating
      reviewCount: 301
    },
    {
      productId: 5, // Sửa id -> productId
      name: 'iPhone 15',
      slug: 'iphone-15', // Thêm slug
      primaryImageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus-256gb-color-pink-image_3_1.png', // Sửa imageUrl -> primaryImageUrl
      price: 19990000,
      oldPrice: 21990000,
      averageRating: 4.7, // Sửa rating -> averageRating
      reviewCount: 1024
    },
    {
      productId: 4, // Sửa id -> productId
      name: 'AirPods Pro (Gen 2)',
      slug: 'airpods-pro-gen-2', // Thêm slug
      primaryImageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/airpods-pro-2-2.png', // Sửa imageUrl -> primaryImageUrl
      price: 6490000,
      oldPrice: 7190000,
      averageRating: 4.9, // Sửa rating -> averageRating
      reviewCount: 512
    },
    {
      productId: 9, // Sửa id -> productId
      name: 'MagSafe Charger',
      slug: 'magsafe-charger', // Thêm slug
      primaryImageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/magsafe-charger-1-1.png', // Sửa imageUrl -> primaryImageUrl
      price: 1290000,
      oldPrice: 1590000,
      averageRating: 4.6, // Sửa rating -> averageRating
      reviewCount: 220
    }
  ]
};