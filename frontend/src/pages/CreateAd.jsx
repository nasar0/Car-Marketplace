import React, { useState } from "react";
import {
  Upload,
  DollarSign,
  FileText,
  Tag,
  Car,
  AlertTriangle,
} from "lucide-react";

const CreateAd = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    brand: "",
    model: "",
    year: "",
    km: "",
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
          REGISTER NEW ASSET
        </h1>
        <p className="text-gray-500">
          Upload your vehicle to the network. Ensure all data is encrypted and
          accurate.
        </p>
      </div>

      <form className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-900/20 to-transparent"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Basic Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Tag className="text-red-500" size={20} />
              Asset Identification
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Armored Batmobile 2024"
                  className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                    Model
                  </label>
                  <input
                    type="text"
                    name="model"
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Car className="text-blue-500" size={20} />
              Technical Specs
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                    Year
                  </label>
                  <input
                    type="number"
                    name="year"
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                    Kilometers
                  </label>
                  <input
                    type="number"
                    name="km"
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
                  Price (€)
                </label>
                <div className="relative">
                  <DollarSign
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={16}
                  />
                  <input
                    type="number"
                    name="price"
                    className="w-full bg-black border border-gray-700 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <FileText className="text-gray-400" size={20} />
            Asset Description
          </h3>
          <textarea
            rows="4"
            className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors"
            placeholder="Describe the condition, modifications, and history of the vehicle..."
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <Upload className="text-purple-500" size={20} />
            Visual Evidence
          </h3>
          <div className="border-2 border-dashed border-gray-700 rounded-xl p-12 text-center hover:border-gray-500 transition-colors cursor-pointer bg-black/30">
            <Upload className="mx-auto text-gray-500 mb-4" size={40} />
            <p className="text-gray-400 font-medium">
              Drop classified images here
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Supports JPG, PNG (Max 5MB)
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg flex gap-3 mb-8">
          <AlertTriangle className="text-red-500 shrink-0" size={24} />
          <p className="text-red-200/80 text-sm">
            By submitting this asset, you agree to the Gotham Trade Protocol.
            All sales are final. The network takes no responsibility for illicit
            goods.
          </p>
        </div>

        {/* Submit */}
        <button className="w-full bg-red-900 hover:bg-red-800 text-white font-bold uppercase tracking-widest py-4 rounded transition-all hover:shadow-[0_0_20px_rgba(153,27,27,0.4)]">
          Initialize Upload
        </button>
      </form>
    </div>
  );
};

export default CreateAd;
