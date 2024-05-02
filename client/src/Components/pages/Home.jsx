import React from 'react';

const VoucherCard = () => {
    const handleRedeem = () => {
        alert('Voucher redeemed successfully!');
    };

    return (
        <div className="flex justify-center items-center h-full pt-60">
            <div className="voucher-card rounded-lg overflow-hidden shadow-lg bg-gray-300 p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Gift Voucher</h2>
                <div className='items-center'> <input className='px-8 py-2 items-center rounded-md bg-white'/></div>
                <p className="text-gray-700 mb-4">This voucher entitles you to a special discount on your next purchase!</p>
                <div className="flex justify-center">
                    <button onClick={handleRedeem} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Redeem Now</button>
                </div>
                <p className="text-gray-600 text-xs mt-4">Valid until: <span id="expiry-date">31/12/2024</span></p>
            </div>
        </div>
);
};

export default VoucherCard;
