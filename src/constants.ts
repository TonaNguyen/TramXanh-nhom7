export interface Product {
  id: string;
  name: string;
  code: string;
  priceFirst: string;
  priceExchange: string;
  category: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  // Sữa hạt
  { id: 'sh01', name: 'Sữa hạt óc chó', code: 'SH01', priceFirst: '25-30k', priceExchange: '20k', category: 'Sữa Hạt', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=500&auto=format&fit=crop' },
  { id: 'sh02', name: 'Sữa hạt hạnh nhân', code: 'SH02', priceFirst: '25-30k', priceExchange: '20k', category: 'Sữa Hạt', image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=500&auto=format&fit=crop' },
  { id: 'sh03', name: 'Sữa hạt điều', code: 'SH03', priceFirst: '25-30k', priceExchange: '20k', category: 'Sữa Hạt', image: 'https://images.unsplash.com/photo-1596450514735-2d002f641194?q=80&w=500&auto=format&fit=crop' },
  { id: 'sh04', name: 'Sữa hạt đậu nành', code: 'SH04', priceFirst: '25-30k', priceExchange: '20k', category: 'Sữa Hạt', image: 'https://images.unsplash.com/photo-1544333323-537f994e220b?q=80&w=500&auto=format&fit=crop' },
  { id: 'sh05', name: 'Sữa hạt macca', code: 'SH05', priceFirst: '25-30k', priceExchange: '20k', category: 'Sữa Hạt', image: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=500&auto=format&fit=crop' },
  { id: 'sh06', name: 'Sữa hạt đậu xanh', code: 'SH06', priceFirst: '25-30k', priceExchange: '20k', category: 'Sữa Hạt', image: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=500&auto=format&fit=crop' },
  { id: 'sh07', name: 'Sữa hạt yến mạch', code: 'SH07', priceFirst: '25-30k', priceExchange: '20k', category: 'Sữa Hạt', image: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=500&auto=format&fit=crop' },
  { id: 'sh08', name: 'Sữa hạt gạo lứt', code: 'SH08', priceFirst: '25-30k', priceExchange: '20k', category: 'Sữa Hạt', image: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=500&auto=format&fit=crop' },
  { id: 'sh09', name: 'Sữa hạt sen', code: 'SH09', priceFirst: '25-30k', priceExchange: '20k', category: 'Sữa Hạt', image: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=500&auto=format&fit=crop' },
  { id: 'sh10', name: 'Sữa hạt mè đen', code: 'SH10', priceFirst: '25-30k', priceExchange: '20k', category: 'Sữa Hạt', image: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=500&auto=format&fit=crop' },
  
  // Kombucha
  { id: 'kb01', name: 'Kombucha trà đào', code: 'KB01', priceFirst: '35-40k', priceExchange: '30k', category: 'Kombucha', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop' },
  { id: 'kb02', name: 'Kombucha trà vải', code: 'KB02', priceFirst: '35-40k', priceExchange: '30k', category: 'Kombucha', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop' },
  { id: 'kb03', name: 'Kombucha trà chanh dây', code: 'KB03', priceFirst: '35-40k', priceExchange: '30k', category: 'Kombucha', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop' },
  { id: 'kb04', name: 'Kombucha dâu tây', code: 'KB04', priceFirst: '35-40k', priceExchange: '30k', category: 'Kombucha', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop' },
  { id: 'kb05', name: 'Kombucha táo xanh', code: 'KB05', priceFirst: '35-40k', priceExchange: '30k', category: 'Kombucha', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop' },
  { id: 'kb06', name: 'Kombucha gừng mật ong', code: 'KB06', priceFirst: '35-40k', priceExchange: '30k', category: 'Kombucha', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop' },
  { id: 'kb07', name: 'Kombucha cam quế', code: 'KB07', priceFirst: '35-40k', priceExchange: '30k', category: 'Kombucha', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop' },
  { id: 'kb08', name: 'Kombucha việt quất', code: 'KB08', priceFirst: '35-40k', priceExchange: '30k', category: 'Kombucha', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop' },
  { id: 'kb09', name: 'Kombucha trà hoa cúc', code: 'KB09', priceFirst: '35-40k', priceExchange: '30k', category: 'Kombucha', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop' },
  { id: 'kb10', name: 'Kombucha trà dâu tằm', code: 'KB10', priceFirst: '35-40k', priceExchange: '30k', category: 'Kombucha', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop' },

  // Detox
  { id: 'dt01', name: 'Nước chanh mật ong hạt chia', code: 'DT01', priceFirst: '20-25k', priceExchange: '20k', category: 'Nước Detox', image: 'https://images.unsplash.com/photo-1610970882799-64a36967bc41?q=80&w=500&auto=format&fit=crop' },
  { id: 'dt02', name: 'Nước cam hạt chia', code: 'DT02', priceFirst: '20-25k', priceExchange: '20k', category: 'Nước Detox', image: 'https://images.unsplash.com/photo-1610970882799-64a36967bc41?q=80&w=500&auto=format&fit=crop' },
  { id: 'dt03', name: 'Nước dâu hạt chia', code: 'DT03', priceFirst: '20-25k', priceExchange: '20k', category: 'Nước Detox', image: 'https://images.unsplash.com/photo-1610970882799-64a36967bc41?q=80&w=500&auto=format&fit=crop' },
  { id: 'dt04', name: 'Nước táo quế hạt chia', code: 'DT04', priceFirst: '20-25k', priceExchange: '20k', category: 'Nước Detox', image: 'https://images.unsplash.com/photo-1610970882799-64a36967bc41?q=80&w=500&auto=format&fit=crop' },
  { id: 'dt05', name: 'Nước nha đam hạt chia', code: 'DT05', priceFirst: '20-25k', priceExchange: '20k', category: 'Nước Detox', image: 'https://images.unsplash.com/photo-1610970882799-64a36967bc41?q=80&w=500&auto=format&fit=crop' },
  { id: 'dt06', name: 'Nước dưa leo – bạc hà – hạt chia', code: 'DT06', priceFirst: '20-25k', priceExchange: '20k', category: 'Nước Detox', image: 'https://images.unsplash.com/photo-1610970882799-64a36967bc41?q=80&w=500&auto=format&fit=crop' },
  { id: 'dt07', name: 'Nước chanh dây hạt chia', code: 'DT07', priceFirst: '20-25k', priceExchange: '20k', category: 'Nước Detox', image: 'https://images.unsplash.com/photo-1610970882799-64a36967bc41?q=80&w=500&auto=format&fit=crop' },
  { id: 'dt08', name: 'Nước việt quất hạt chia', code: 'DT08', priceFirst: '20-25k', priceExchange: '20k', category: 'Nước Detox', image: 'https://images.unsplash.com/photo-1610970882799-64a36967bc41?q=80&w=500&auto=format&fit=crop' },
  { id: 'dt09', name: 'Nước gừng chanh hạt chia', code: 'DT09', priceFirst: '20-25k', priceExchange: '20k', category: 'Nước Detox', image: 'https://images.unsplash.com/photo-1610970882799-64a36967bc41?q=80&w=500&auto=format&fit=crop' },
  { id: 'dt10', name: 'Nước dứa bạc hà hạt chia', code: 'DT10', priceFirst: '20-25k', priceExchange: '20k', category: 'Nước Detox', image: 'https://images.unsplash.com/photo-1610970882799-64a36967bc41?q=80&w=500&auto=format&fit=crop' },

  // Sữa chua uống
  { id: 'sc01', name: 'Sữa chua uống nguyên bản', code: 'SC01', priceFirst: '30-35k', priceExchange: '25k', category: 'Sữa Chua Uống', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=500&auto=format&fit=crop' },
  { id: 'sc02', name: 'Sữa chua uống ít đường', code: 'SC02', priceFirst: '30-35k', priceExchange: '25k', category: 'Sữa Chua Uống', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=500&auto=format&fit=crop' },
  { id: 'sc03', name: 'Sữa chua uống không đường', code: 'SC03', priceFirst: '30-35k', priceExchange: '25k', category: 'Sữa Chua Uống', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=500&auto=format&fit=crop' },
  { id: 'sc04', name: 'Sữa chua uống tách béo', code: 'SC04', priceFirst: '30-35k', priceExchange: '25k', category: 'Sữa Chua Uống', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=500&auto=format&fit=crop' },
  { id: 'sc05', name: 'Sữa chua uống nếp cẩm', code: 'SC05', priceFirst: '30-35k', priceExchange: '25k', category: 'Sữa Chua Uống', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=500&auto=format&fit=crop' },
  { id: 'sc06', name: 'Sữa chua uống mật ong', code: 'SC06', priceFirst: '30-35k', priceExchange: '25k', category: 'Sữa Chua Uống', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=500&auto=format&fit=crop' },
  { id: 'sc07', name: 'Sữa chua uống dâu', code: 'SC07', priceFirst: '30-35k', priceExchange: '25k', category: 'Sữa Chua Uống', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=500&auto=format&fit=crop' },
  { id: 'sc08', name: 'Sữa chua uống việt quất', code: 'SC08', priceFirst: '30-35k', priceExchange: '25k', category: 'Sữa Chua Uống', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=500&auto=format&fit=crop' },
  { id: 'sc09', name: 'Sữa chua uống xoài', code: 'SC09', priceFirst: '30-35k', priceExchange: '25k', category: 'Sữa Chua Uống', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=500&auto=format&fit=crop' },
  { id: 'sc10', name: 'Sữa chua uống cam', code: 'SC10', priceFirst: '30-35k', priceExchange: '25k', category: 'Sữa Chua Uống', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=500&auto=format&fit=crop' },
  { id: 'sc11', name: 'Sữa chua uống vị cốm', code: 'SC11', priceFirst: '30-35k', priceExchange: '25k', category: 'Sữa Chua Uống', image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=500&auto=format&fit=crop' },
];


export const FAQS = [
  { q: "Trạm Xanh kinh doanh những sản phẩm gì?", a: "Trạm Xanh cung cấp các sản phẩm chăm sóc sức khỏe có nguồn gốc tự nhiên như sữa hạt, kombucha, nước detox thanh lọc cơ thể và sữa chua, hướng đến lối sống lành mạnh và bền vững." },
  { q: "Sản phẩm của Trạm Xanh có sử dụng chất bảo quản không?", a: "Không. Các sản phẩm của Trạm Xanh được sản xuất từ nguyên liệu tự nhiên, hạn chế tối đa chất bảo quản và phụ gia hóa học, đảm bảo an toàn cho sức khỏe người tiêu dùng." },
  { q: "Đối tượng nào phù hợp sử dụng sản phẩm của Trạm Xanh?", a: "Sản phẩm phù hợp với người quan tâm đến sức khỏe, người ăn uống lành mạnh, người ăn chay, người tập luyện thể thao và người muốn thanh lọc cơ thể." },
  { q: "Thời hạn sử dụng của sản phẩm là bao lâu?", a: "Do sản phẩm ít chất bảo quản, thời hạn sử dụng thường ngắn và được ghi rõ trên bao bì. Khách hàng nên bảo quản đúng hướng dẫn để đảm bảo chất lượng." },
  { q: "Sản phẩm có cần bảo quản lạnh không?", a: "Có. Các sản phẩm như kombucha, sữa hạt và sữa chua cần được bảo quản lạnh để giữ nguyên hương vị và chất lượng dinh dưỡng." },
  { q: "Trạm Xanh có giao hàng tận nơi không?", a: "Có. Trạm Xanh hỗ trợ giao hàng tận nơi trong khu vực nội thành và các khu vực lân cận theo chính sách vận chuyển hiện hành." },
  { q: "Khách hàng có thể đổi hoặc trả sản phẩm không?", a: "Khách hàng có thể đổi/trả sản phẩm nếu phát hiện lỗi từ nhà sản xuất, giao sai sản phẩm hoặc sản phẩm kém chất lượng theo chính sách đã công bố." },
  { q: "Làm thế nào để phản ánh hoặc khiếu nại về sản phẩm?", a: "Khách hàng có thể liên hệ trực tiếp qua hotline, email hoặc fanpage của Trạm Xanh để được hỗ trợ và giải quyết nhanh chóng." },
  { q: "Trạm Xanh có nhận đặt hàng số lượng lớn không?", a: "Có. Trạm Xanh nhận đơn hàng số lượng lớn cho cá nhân, doanh nghiệp, sự kiện và có chính sách ưu đãi phù hợp." },
  { q: "Sản phẩm có phù hợp với người ăn chay không?", a: "Hầu hết các sản phẩm của Trạm Xanh đều phù hợp với người ăn chay. Thông tin chi tiết được ghi rõ trên bao bì từng sản phẩm." },
  { q: "Trạm Xanh có thường xuyên cập nhật sản phẩm mới không?", a: "Có. Trạm Xanh liên tục nghiên cứu và phát triển các dòng sản phẩm mới nhằm đáp ứng nhu cầu đa dạng của khách hàng." },
  { q: "Có thể đặt hàng qua những kênh nào?", a: "Khách hàng có thể đặt hàng trực tiếp tại cửa hàng, qua website, fanpage Facebook, Zalo hoặc các kênh bán hàng trực tuyến của Trạm Xanh." },
];
