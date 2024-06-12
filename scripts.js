document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { itemName: '미니밤호박', optionCode: 'A01', optionName: '소(300g미만)', weight: '1kg', price: '8,300', vipPrice: '7,000', bulkPrice: '6,500' },
        { itemName: '미니밤호박', optionCode: 'A02', optionName: '소(300g미만)', weight: '2kg', price: '10,600', vipPrice: '9,000', bulkPrice: '8,800' },
        { itemName: '미니밤호박', optionCode: 'A03', optionName: '소(300g미만)', weight: '3kg', price: '12,900', vipPrice: '11,000', bulkPrice: '11,300' },
        { itemName: '미니밤호박', optionCode: 'A04', optionName: '소(300g미만)', weight: '5kg', price: '18,000', vipPrice: '17,600', bulkPrice: '17,100' },
        { itemName: '미니밤호박', optionCode: 'A05', optionName: '소(300g미만)', weight: '10kg', price: '32,000', vipPrice: '32,000', bulkPrice: '31,100' },
        { itemName: '미니밤호박', optionCode: 'A06', optionName: '로얄(300~700g)', weight: '1kg', price: '8,700', vipPrice: '7,400', bulkPrice: '6,900' },
        { itemName: '미니밤호박', optionCode: 'A07', optionName: '로얄(300~700g)', weight: '2kg', price: '11,400', vipPrice: '10,000', bulkPrice: '9,600' },
        { itemName: '미니밤호박', optionCode: 'A08', optionName: '로얄(300~700g)', weight: '3kg', price: '14,100', vipPrice: '13,000', bulkPrice: '12,200' },
        { itemName: '미니밤호박', optionCode: 'A09', optionName: '로얄(300~700g)', weight: '5kg', price: '21,000', vipPrice: '19,000', bulkPrice: '18,000' },
        { itemName: '미니밤호박', optionCode: 'A10', optionName: '로얄(300~700g)', weight: '10kg', price: '36,000', vipPrice: '35,000', bulkPrice: '34,000' },
        { itemName: '미니밤호박', optionCode: 'A11', optionName: '대(700g초과)', weight: '1kg', price: '8,000', vipPrice: '6,700', bulkPrice: '6,200' },
        { itemName: '미니밤호박', optionCode: 'A12', optionName: '대(700g초과)', weight: '2kg', price: '10,300', vipPrice: '8,700', bulkPrice: '8,400' },
        { itemName: '미니밤호박', optionCode: 'A13', optionName: '대(700g초과)', weight: '3kg', price: '12,600', vipPrice: '10,700', bulkPrice: '10,600' },
        { itemName: '미니밤호박', optionCode: 'A14', optionName: '대(700g초과)', weight: '5kg', price: '17,400', vipPrice: '15,400', bulkPrice: '15,000' },
        { itemName: '미니밤호박', optionCode: 'A15', optionName: '대(700g초과)', weight: '10kg', price: '32,000', vipPrice: '31,000', bulkPrice: '30,100' },
        { itemName: '미니밤호박', optionCode: 'A16', optionName: '특품(320~550g)', weight: '1kg', price: '9,500', vipPrice: '8,000', bulkPrice: '7,700' },
        { itemName: '미니밤호박', optionCode: 'A17', optionName: '특품(320~550g)', weight: '2kg', price: '11,800', vipPrice: '9,700', bulkPrice: '9,300' },
        { itemName: '미니밤호박', optionCode: 'A18', optionName: '특품(320~550g)', weight: '3kg', price: '14,100', vipPrice: '11,500', bulkPrice: '11,000' },
        { itemName: '미니밤호박', optionCode: 'A19', optionName: '특품(320~550g)', weight: '5kg', price: '19,900', vipPrice: '16,600', bulkPrice: '15,800' },
        { itemName: '미니밤호박', optionCode: 'A20', optionName: '특품(320~550g)', weight: '10kg', price: '39,000', vipPrice: '32,000', bulkPrice: '28,000' },
        { itemName: '미니밤호박', optionCode: 'A21', optionName: '못난이(혼합/랜덤)', weight: '1kg', price: '6,800', vipPrice: '6,700', bulkPrice: '6,200' },
        { itemName: '미니밤호박', optionCode: 'A22', optionName: '못난이(혼합/랜덤)', weight: '2kg', price: '9,200', vipPrice: '8,400', bulkPrice: '8,200' },
        { itemName: '미니밤호박', optionCode: 'A23', optionName: '못난이(혼합/랜덤)', weight: '3kg', price: '11,600', vipPrice: '10,100', bulkPrice: '9,800' },
        { itemName: '미니밤호박', optionCode: 'A24', optionName: '못난이(혼합/랜덤)', weight: '5kg', price: '17,400', vipPrice: '14,200', bulkPrice: '13,900' },
        { itemName: '미니밤호박', optionCode: 'A25', optionName: '못난이(혼합/랜덤)', weight: '10kg', price: '29,000', vipPrice: '29,000', bulkPrice: '28,000' },

        // 하우스귤 품목 추가
        { itemName: '하우스귤', optionCode: 'B01', optionName: '소과(2S)', weight: '1kg', price: '10,000', vipPrice: '9,500', bulkPrice: '8,200' },
        { itemName: '하우스귤', optionCode: 'B02', optionName: '소과(2S)', weight: '2kg', price: '14,000', vipPrice: '13,000', bulkPrice: '12,200' },
        { itemName: '하우스귤', optionCode: 'B03', optionName: '소과(2S)', weight: '3kg', price: '18,000', vipPrice: '16,500', bulkPrice: '16,400' },
        { itemName: '하우스귤', optionCode: 'B04', optionName: '소과(2S)', weight: '5kg', price: '27,000', vipPrice: '24,500', bulkPrice: '25,000' },
        { itemName: '하우스귤', optionCode: 'B05', optionName: '소과(2S)', weight: '10kg', price: '48,000', vipPrice: '43,000', bulkPrice: '48,500' },
        { itemName: '하우스귤', optionCode: 'B06', optionName: '로얄과 (2S-M)', weight: '1kg', price: '10,500', vipPrice: '10,000', bulkPrice: '8,700' },
        { itemName: '하우스귤', optionCode: 'B07', optionName: '로얄과 (2S-M)', weight: '2kg', price: '15,000', vipPrice: '14,000', bulkPrice: '13,200' },
        { itemName: '하우스귤', optionCode: 'B08', optionName: '로얄과 (2S-M)', weight: '3kg', price: '19,500', vipPrice: '18,000', bulkPrice: '17,900' },
        { itemName: '하우스귤', optionCode: 'B09', optionName: '로얄과 (2S-M)', weight: '5kg', price: '29,500', vipPrice: '27,000', bulkPrice: '27,500' },
        { itemName: '하우스귤', optionCode: 'B10', optionName: '로얄과 (2S-M)', weight: '10kg', price: '53,000', vipPrice: '48,000', bulkPrice: '53,000' },
        { itemName: '하우스귤', optionCode: 'B11', optionName: '대과 (L-2L)', weight: '1kg', price: '9,000', vipPrice: '8,500', bulkPrice: '7,200' },
        { itemName: '하우스귤', optionCode: 'B12', optionName: '대과 (L-2L)', weight: '2kg', price: '12,000', vipPrice: '11,000', bulkPrice: '10,200' },
        { itemName: '하우스귤', optionCode: 'B13', optionName: '대과 (L-2L)', weight: '3kg', price: '15,000', vipPrice: '13,500', bulkPrice: '13,400' },
        { itemName: '하우스귤', optionCode: 'B14', optionName: '대과 (L-2L)', weight: '5kg', price: '22,000', vipPrice: '19,500', bulkPrice: '20,000' },
        { itemName: '하우스귤', optionCode: 'B15', optionName: '대과 (L-2L)', weight: '10kg', price: '38,000', vipPrice: '33,000', bulkPrice: '38,000' },

    ];

    const tableBody = document.querySelector('#productTable tbody');

    products.forEach(product => {
        const row = document.createElement('tr');
        const itemNameCell = document.createElement('td');
        const optionNameCell = document.createElement('td');
        const optionCodeCell = document.createElement('td');
        const weightCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const vipPriceCell = document.createElement('td');
        const bulkPriceCell = document.createElement('td');

        itemNameCell.textContent = product.itemName;
        optionNameCell.textContent = product.optionName;
        optionCodeCell.textContent = product.optionCode;
        weightCell.textContent = product.weight;
        priceCell.textContent = product.price;
        vipPriceCell.textContent = product.vipPrice;
        bulkPriceCell.textContent = product.bulkPrice;

        // Add standard-cell class to specific cells
        optionCodeCell.classList.add('standard-cell');
        weightCell.classList.add('standard-cell');
        priceCell.classList.add('standard-cell');
        vipPriceCell.classList.add('standard-cell');
        bulkPriceCell.classList.add('standard-cell');

        row.appendChild(itemNameCell);
        row.appendChild(optionNameCell);
        row.appendChild(optionCodeCell);
        row.appendChild(weightCell);
        row.appendChild(priceCell);
        row.appendChild(vipPriceCell);
        row.appendChild(bulkPriceCell);

        tableBody.appendChild(row);
    });
});