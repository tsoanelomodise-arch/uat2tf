import { useState } from "react";
import { X } from "lucide-react";

interface StoriesModalProps {
  open: boolean;
  onClose: () => void;
}

const StoriesModal = ({ open, onClose }: StoriesModalProps) => {
  const [activeStory, setActiveStory] = useState('thandi');

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-primary">Stories of Transformation</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-6 py-3 border-b border-gray-200 bg-gray-50 flex gap-2">
          <button
            onClick={() => setActiveStory('thandi')}
            className={`px-4 py-2 rounded-full text-white transition-colors ${
              activeStory === 'thandi' ? 'bg-primary opacity-100' : 'bg-primary opacity-60'
            }`}
          >
            Thandi's Journey
          </button>
          <button
            onClick={() => setActiveStory('thabo')}
            className={`px-4 py-2 rounded-full text-white transition-colors ${
              activeStory === 'thabo' ? 'opacity-100' : 'opacity-60'
            }`}
            style={{ backgroundColor: '#0000FE' }}
          >
            Thabo's Story
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          {activeStory === 'thandi' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Thandi's Journey: From Exclusion to Entrepreneurship</h3>
              <img 
                src="/images/thandis-journey.jpg" 
                alt="Thandi's Journey - From Exclusion to Entrepreneurship" 
                className="w-full h-auto rounded-lg shadow-lg"
                width="800"
                height="450"
                loading="lazy"
              />
              <p className="text-gray-700 leading-relaxed text-lg">
                Thandi, a young woman from a rural village, faces multiple barriers — limited finance, markets, 
                and networks. With bundled support from the Transformation Fund, she is able to launch a 
                sustainable business, employ others, and participate in new value chains.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-primary">Access to Capital</h4>
                    <p className="text-gray-700 text-sm">Received startup funding and working capital to launch her business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-primary">Skills Development</h4>
                    <p className="text-gray-700 text-sm">Participated in business training and mentorship programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-primary">Market Access</h4>
                    <p className="text-gray-700 text-sm">Connected to supply chains and new customer networks</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-primary mb-2">Impact Achieved</h4>
                <p className="text-gray-700 text-sm">
                  Thandi's business now employs 8 people from her community and has become a key supplier in the regional agricultural value chain.
                </p>
              </div>
            </div>
          )}

          {activeStory === 'thabo' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Thabo's Story: Scaling Up a Black Industrialist</h3>
              <img 
                src="/images/thabos-story.jpg" 
                alt="Thabo's Story - Scaling Up a Black Industrialist" 
                className="w-full h-auto rounded-lg shadow-lg"
                width="800"
                height="450"
                loading="lazy"
              />
              <p className="text-gray-700 leading-relaxed text-lg">
                Thabo, an ambitious entrepreneur, has proven demand but lacks capital and supply chain access. 
                Through Fund support, he expands operations, integrates into OEM supplier networks, and 
                demonstrates the potential of industrialisation driven by black entrepreneurs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-primary">Scale-Up Capital</h4>
                    <p className="text-gray-700 text-sm">Secured growth funding to expand manufacturing capacity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-primary">Supply Chain Integration</h4>
                    <p className="text-gray-700 text-sm">Connected to OEM networks and major industrial buyers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold text-primary">Technical Excellence</h4>
                    <p className="text-gray-700 text-sm">Achieved quality certifications and technical standards</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-primary mb-2">Impact Achieved</h4>
                <p className="text-gray-700 text-sm">
                  Thabo's company has grown from 15 to 120 employees and now supplies components to three major automotive manufacturers.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoriesModal;