const PlanSection = () => {
    return (
        <>
            <div className="x-plan">
                <div className="grid grid-cols-1">
                    <div className="grid gap-4 mt-10 mb-10">
                        <div className="mt-10">
                            <h3 style={{ fontSize: "30px" }}>- X PLAN -</h3>
                        </div>
                        <div>
                            <h1 style={{ fontSize: "56px" }}>More plans coming soon</h1>
                        </div>
                        <div className="mb-10">
                            <button type="button" style={{ fontSize: "14px" }} className="text-gray-900 bg-white hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-900">Submit now</button>
                        </div>
                    </div>
                    <div className="grid gap-4 btc-ordinals">
                        <div>
                            <h3 style={{ fontSize: "56px", color: "#ff8400" }}>BTC+Ordinals=BTCs</h3>
                        </div>
                        <div style={{ marginLeft: "auto", marginRight: "auto", width: "1000px" }}>
                            <blockquote className="text-gray-900 p-4 my-4">
                                The rise of BTCs is a dynamic journey, transforming from an overlooked project to an asset recognized by the community.
                                In the ever-changing world of cryptocurrency, BTCs remains committed to its ideals, injecting new energy into the Bitcoin network and presenting new possibilities for the industry.
                                Regardless of the future, BTCs will remain a compelling experiment and a promising asset, inspiring people to pursue the path of financial freedom.
                            </blockquote>
                        </div>
                        <div>
                            <button type="button" style={{ fontSize: "14px" }} className="text-white bg-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-900">WHITE PAPER</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanSection;