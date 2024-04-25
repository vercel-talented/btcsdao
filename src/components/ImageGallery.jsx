const ImageGallery = () => {
    return (
        <>
            <div className="grid grid-cols-1 image-gallery gap-6">
                <div>
                    <p className="text-white text-center text-6xl">Image Gallery</p>
                </div>
                <div>
                    <p>There maybe no better way to communicate what we do than through images.</p>
                    <p>As you browse our site, take a few moments to let your eyes linger here, and see if you</p>
                    <p>can get a feel for our signature touch.</p>
                </div>


                <div className="grid grid-cols-3">
                    <div className="grid">
                        <div className="overflow-hidden-box">
                            <img className="h-auto max-w-full" src="https://static.wixstatic.com/media/92462d_d9dbd1e86f1547388fe5a58713d8946f~mv2.jpg/v1/fit/w_341,h_256,q_90/92462d_d9dbd1e86f1547388fe5a58713d8946f~mv2.webp" alt="" />
                        </div>
                        <div className="overflow-hidden-box">
                            <img className="h-auto max-w-full" src="https://static.wixstatic.com/media/92462d_c2379268521249859d4d5daa62d232a1~mv2.jpg/v1/fit/w_341,h_256,q_90/92462d_c2379268521249859d4d5daa62d232a1~mv2.webp" alt="" />
                        </div>
                        <div className="overflow-hidden-box">
                            <img className="h-auto max-w-full" src="https://static.wixstatic.com/media/92462d_9cf289b17dca424a861f2093e76ff127~mv2.jpg/v1/fit/w_341,h_256,q_90/92462d_9cf289b17dca424a861f2093e76ff127~mv2.webp" alt="" />
                        </div>
                    </div>
                    <div className="grid">
                        <div className="overflow-hidden-box">
                            <img className="h-auto max-w-full" src="https://static.wixstatic.com/media/92462d_7e7f0e5d8e9649ccadbb015e5f10a2ae~mv2.jpg/v1/fit/w_341,h_455,q_90/92462d_7e7f0e5d8e9649ccadbb015e5f10a2ae~mv2.webp" alt="" />
                        </div>
                        <div className="overflow-hidden-box">
                            <img className="h-auto max-w-full" src="https://static.wixstatic.com/media/92462d_fbdc648afe0946f4af664322b796d3dc~mv2.jpg/v1/fit/w_341,h_341,q_90/92462d_fbdc648afe0946f4af664322b796d3dc~mv2.webp" alt="" />
                        </div>
                    </div>
                    <div className="grid">
                        <div className="overflow-hidden-box">
                            <img className="h-auto max-w-full" src="https://static.wixstatic.com/media/92462d_051ceec88f5749cd9feb85579cfa8bed~mv2.jpg/v1/fit/w_341,h_227,q_90/92462d_051ceec88f5749cd9feb85579cfa8bed~mv2.webp" alt="" />
                        </div>
                        <div className="overflow-hidden-box">
                            <img className="h-auto max-w-full" src="https://static.wixstatic.com/media/92462d_7a3001a62bf742c4855e7654f452bee8~mv2.jpg/v1/fit/w_341,h_243,q_90/92462d_7a3001a62bf742c4855e7654f452bee8~mv2.webp" alt="" />
                        </div>
                        <div className="overflow-hidden-box">
                            <img className="h-auto max-w-full" src="https://static.wixstatic.com/media/92462d_4b1ac441e1ee4fbfadfeface675ee737~mv2.jpg/v1/fit/w_341,h_341,q_90/92462d_4b1ac441e1ee4fbfadfeface675ee737~mv2.webp" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ImageGallery;