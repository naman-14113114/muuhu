const fs = require('fs');
const path = require('path');

const countries = ['us', 'uk', 'ca', 'au'];

countries.forEach(country => {
  const filePath = path.join(__dirname, 'apps', country, 'src', 'data', 'productSections.ts');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Rename Torch sections to Massager sections
    content = content.replace(/torchFaqs/g, "massagerFaqs");
    content = content.replace(/torchFeatures/g, "massagerFeatures");
    content = content.replace(/torchTimeline/g, "massagerTimeline");
    
    // Replace Red Light Therapy text with Gua Sha/Massage text
    content = content.replace(/Targeted Red Light Therapy/g, "SPA-Quality Massage");
    content = content.replace(/3 therapeutic wavelengths/g, "3-piece versatile kit");
    content = content.replace(/Portable Joint & Muscle Relief/g, "Reduce Puffiness & Tension");
    content = content.replace(/Compact design for deep tissue/g, "Ergonomic resin design for facial contouring");

    // Replace actual FAQ and Feature strings in productSections
    // Since productSections.ts might just export the objects directly, the simplest global replace for specific terms:
    content = content.replace(/Red Light/g, "Massage");
    content = content.replace(/Torch/g, "Kit");

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated productSections.ts for ${country}`);
  }
});
