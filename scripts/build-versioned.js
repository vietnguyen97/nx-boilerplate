const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Danh sách project cần build
const projects = ["app1", "app2", "shared-utils"];

projects.forEach((project) => {
  try {
    // Lấy version từ package.json của từng project
    const packageJsonPath = path.join(__dirname, `./apps/${project}/package.json`);
    
    if (!fs.existsSync(packageJsonPath)) {
      console.warn(`⚠️  Không tìm thấy package.json cho ${project}, bỏ qua.`);
      return;
    }

    const packageJson = require(packageJsonPath);
    const version = packageJson.version;

    if (!version) {
      console.warn(`⚠️  Không tìm thấy version trong package.json của ${project}, bỏ qua.`);
      return;
    }

    // Tạo thư mục lưu build theo phiên bản
    const buildPath = path.join(__dirname, `../dist/${project}-${version}`);
    if (!fs.existsSync(buildPath)) {
      fs.mkdirSync(buildPath, { recursive: true });
    }

    // Chạy lệnh build
    console.log(`🚀 Building ${project} version ${version}...`);
    execSync(`nx build ${project} --outputPath=${buildPath}`, { stdio: "inherit" });

    console.log(`✅ Build ${project} hoàn thành! Kết quả tại: dist/${project}-${version}`);
  } catch (error) {
    console.error(`❌ Lỗi khi build ${project}:`, error.message);
  }
});
