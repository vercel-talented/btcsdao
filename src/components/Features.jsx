import Volunteer from '../assets/volunteer.svg'
import Contract from '../assets/contract.svg'
import Consensus from '../assets/consensus.svg'
import Chain from '../assets/chain.svg'
import Decentral from '../assets/decentral.svg'
import Transaction from '../assets/transaction.svg'

const Features = () => {
    return (
        <>
            <div className="grid grid-cols-1 features gap-8">
                <div>
                    <p className="text-gray-900 text-center text-5xl">Features</p>
                </div>
                <div>
                    <p className="text-gray-900 text-center text-lg">Exceptional Quality</p>
                </div>
                <div className="grid grid-cols-3">
                    <div className="text-center mt-10 mb-10">
                        <div role="status">
                            <img src={Volunteer} className='inline w-10 h-10 text-gray-200 dark:text-gray-600' />
                            <p className="mt-6 text-center text-gray-900 dark:text-gray-400" style={{ fontSize: "20px" }}>Community Volunteer Enthusiasm</p>
                        </div>
                    </div>
                    <div className="text-center mt-10 mb-10">
                        <div role="status">
                            <img src={Contract} className='inline w-10 h-10 text-gray-200 dark:text-gray-600' />
                            <p className="mt-6 text-center text-gray-900 dark:text-gray-400" style={{ fontSize: "20px" }}>No contractual risk</p>
                        </div>
                    </div>
                    <div className="text-center mt-10 mb-10">
                        <div role="status">
                            <img src={Decentral} className='inline w-10 h-10 text-gray-200 dark:text-gray-600' />
                            <p className="mt-6 text-center text-gray-900 dark:text-gray-400" style={{ fontSize: "20px" }}>Complete decentralization</p>
                        </div>
                    </div>
                    <div className="text-center mt-10 mb-10">
                        <div role="status">
                            <img src={Transaction} className='inline w-10 h-10 text-gray-200 dark:text-gray-600' />
                            <p className="mt-6 text-center text-gray-900 dark:text-gray-400" style={{ fontSize: "20px" }}>Frequent transaction rates</p>
                        </div>
                    </div>
                    <div className="text-center mt-10 mb-10">
                        <div role="status">
                            <img src={Chain} className='inline w-10 h-10 text-gray-200 dark:text-gray-600' />
                            <p className="mt-6 text-center text-gray-900 dark:text-gray-400" style={{ fontSize: "20px" }}>Permanently Save BTC Chain</p>
                        </div>
                    </div>
                    <div className="text-center mt-10 mb-10">
                        <div role="status">
                            <img src={Consensus} className='inline w-10 h-10 text-gray-200 dark:text-gray-600' />
                            <p className="mt-6 text-center text-gray-900 dark:text-gray-400" style={{ fontSize: "20px" }}>​Strong fairness and consensus</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;