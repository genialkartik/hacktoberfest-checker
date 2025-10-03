# 🎃 Hacktoberfest Checker 2025

[![Open Issues](https://img.shields.io/github/issues/genialkartik/hacktoberfest-checker?style=for-the-badge&logo=github)](https://github.com/genialkartik/hacktoberfest-checker/issues) [![Forks](https://img.shields.io/github/forks/genialkartik/hacktoberfest-checker?style=for-the-badge&logo=github)](https://github.com/genialkartik/hacktoberfest-checker/network/members) [![Stars](https://img.shields.io/github/stars/genialkartik/hacktoberfest-checker?style=for-the-badge&logo=reverbnation)](https://github.com/genialkartik/hacktoberfest-checker/stargazers) ![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%99%A5-red?style=for-the-badge&logo=open-source-initiative) [![Version](https://img.shields.io/badge/Version-2025.1.0-orange?style=for-the-badge)](https://github.com/genialkartik/hacktoberfest-checker/releases)

> **The most comprehensive and visually stunning Hacktoberfest progress tracker for 2025!**

Track your journey to complete **Hacktoberfest 2025** by making **6 valid pull requests** during October and earn your digital badges as a **Super Contributor**! Our checker validates PRs according to the latest [Hacktoberfest 2025 guidelines](https://hacktoberfest.com/participation/).

## ✨ **Live Demo**

🚀 **Check Your Progress**: [**gitfork.netlify.app**](https://gitfork.netlify.app/)

## 🎯 **What's New in 2025**

### 🔥 **Major Updates**

- **6 PR Requirement**: Updated from 4 to 6 valid pull requests
- **Digital Badges**: New reward system with evolving digital badges
- **Super Contributor Status**: Recognition for completed participants
- **October 1-31 Timeframe**: Precise date validation for 2025

### 🎨 **Complete Visual Overhaul**

- **Official Hacktoberfest 2025 Theme**: Matching colors and branding
- **Modern UI/UX**: Glass morphism, gradients, and smooth animations
- **Enhanced Progress Tracking**: Dynamic color-coded circular progress bars
- **Mobile-First Design**: Optimized for all devices and screen sizes
- **Accessibility Improvements**: Better contrast and keyboard navigation

### ⚡ **Technical Upgrades**

- **React 18.3+**: Latest React features and performance improvements
- **Material-UI v7**: Modern component library with enhanced theming
- **Bootstrap 5.3+**: Updated responsive framework
- **Enhanced API Integration**: Improved GitHub API handling and error management
- **TypeScript Ready**: Better type safety and developer experience

## 📸 **Screenshots**

### 🌟 **New 2025 Interface**

![Hacktoberfest Checker 2025](https://user-images.githubusercontent.com/32240906/135563258-cf53f19c-6d88-4196-a8f8-105f97c487c8.png)

_Modern, vibrant design with official Hacktoberfest 2025 branding_

## 🤔 **Why Another Hacktoberfest Checker?**

While other checkers exist, our 2025 version stands out because:

1. **🎯 Always Up-to-Date**: Reflects the latest [Hacktoberfest 2025 guidelines](https://hacktoberfest.com/participation/)
2. **🎨 Official Branding**: Matches the official Hacktoberfest visual identity
3. **📱 Mobile-First**: Optimized for developers on the go
4. **⚡ Real-Time Validation**: Instant PR validation with detailed feedback
5. **🚀 Modern Tech Stack**: Built with the latest web technologies

## 🔄 **2025 Policy Changes**

### 🎯 **New Requirements**

- **6 Valid PRs**: Increased from 4 to 6 pull requests
- **Opt-in Only**: Projects must explicitly participate in Hacktoberfest
- **Quality Focus**: Enhanced validation for meaningful contributions
- **Digital Rewards**: New badge system replacing physical rewards

## ✅ **PR Validation Criteria**

Your pull request counts toward Hacktoberfest 2025 completion **only when ALL** of these conditions are met:

### 📅 **Timing Requirements**

- ✅ Submitted during **October 1-31, 2025**
- ✅ Created within the official Hacktoberfest timeframe

### 🏛️ **Repository Requirements**

- ✅ Submitted to a **public repository**
- ✅ Repository has the `hacktoberfest` topic **OR**
- ✅ PR is labeled `hacktoberfest-accepted` by a maintainer

### 🔍 **Status Requirements**

- ✅ PR is **merged** **OR** **approved** by maintainers
- ✅ PR is not marked as **spam** or **invalid**
- ✅ Repository is not excluded from Hacktoberfest

## 🛠️ **Technical Requirements**

### 💻 **System Requirements**

- **Node.js**: v18.0.0+ (LTS recommended)
- **React**: 18.3+
- **Browser**: Modern browser with ES2020+ support
- **Memory**: 512MB+ available RAM

### 🔑 **API Configuration**

Before running locally, check your [GitHub API rate limit](https://api.github.com/rate_limit).

**Recommended**: [Generate a GitHub Personal Access Token](https://github.com/settings/tokens/new?scopes=&description=Hacktoberfest%20Checker) to increase rate limits.

## 🚀 **Quick Start**

### 📥 **Installation**

```bash
# Clone the repository
git clone https://github.com/genialkartik/hacktoberfest-checker.git

# Navigate to project directory
cd hacktoberfest-checker

# Install dependencies
npm install

# Start development server
npm start

# Open in browser
open http://localhost:3000
```

### 🔧 **Environment Configuration**

Create a `.env` file in the root directory:

```env
REACT_APP_GITHUB_API=https://api.github.com/search/issues
REACT_APP_HEADER_AUTHORIZATION=token YOUR_GITHUB_TOKEN
```

### 📦 **Available Scripts**

```bash
npm start          # Start development server
npm test           # Run test suite
npm run build      # Create production build
npm run lint       # Run ESLint checks
npm run format     # Format code with Prettier
```

## 🤝 **Contributing**

We welcome contributions from the community! Here's how you can help make the Hacktoberfest Checker even better:

### 🐛 **Report Issues**

Found a bug or have a feature request? [Open an issue](https://github.com/genialkartik/hacktoberfest-checker/issues/new) with detailed information.

### 💡 **Contribute Code**

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### 📋 **Contribution Guidelines**

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features when applicable
- Update documentation as needed
- Ensure all tests pass before submitting

### 🏷️ **Good First Issues**

Look for issues labeled [`good first issue`](https://github.com/genialkartik/hacktoberfest-checker/labels/good%20first%20issue) if you're new to the project.

## 🔧 **Development**

### 🏗️ **Architecture**

```
src/
├── components/          # React components
│   ├── Blog/           # Blog and documentation
│   ├── assets/         # Images, styles, and static files
│   └── footer/         # Footer component
├── api/                # GitHub API integration
├── routes/             # Application routing
└── styles/             # Global styles and themes
```

### 📊 **Key Features**

- **Real-time PR validation** with GitHub API
- **Progressive Web App** capabilities
- **Responsive design** for all devices
- **Dark theme** with modern aesthetics
- **Error handling** with user-friendly messages
- **Performance optimized** with code splitting

### 🧪 **Testing**

```bash
npm test               # Run all tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Generate coverage report
```

### 🎨 **Design System**

The 2025 update includes a comprehensive design system:

- **Color Palette**: Official Hacktoberfest 2025 colors
- **Typography**: Inter and JetBrains Mono fonts
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth transitions and micro-interactions

## 📈 **Performance & SEO**

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO Optimized**: Proper meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🙏 **Acknowledgments**

### 🌟 **Core Contributors 2025**

- [**Kartik Tyagi**](https://github.com/genialkartik/) - _Creator & Maintainer_
- [**All Contributors**](https://github.com/genialkartik/hacktoberfest-checker/graphs/contributors) - _Community Heroes_

### 🏆 **Special Thanks**

- **DigitalOcean** - For organizing Hacktoberfest
- **GitHub** - For providing excellent APIs
- **React Community** - For the amazing ecosystem
- **Open Source Contributors** - For making this possible

[![Contributors](https://img.shields.io/github/contributors/genialkartik/hacktoberfest-checker?style=for-the-badge)](https://github.com/genialkartik/hacktoberfest-checker/graphs/contributors)

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

[![License](https://img.shields.io/github/license/genialkartik/hacktoberfest-checker?style=for-the-badge)](https://github.com/genialkartik/hacktoberfest-checker/blob/master/LICENSE)

```
MIT © 2025 Kartik Tyagi
```

## 🔗 **Links**

- **Live Demo**: [gitfork.netlify.app](https://gitfork.netlify.app/)
- **GitHub Repository**: [genialkartik/hacktoberfest-checker](https://github.com/genialkartik/hacktoberfest-checker)
- **Issues**: [Report bugs or request features](https://github.com/genialkartik/hacktoberfest-checker/issues)
- **Discussions**: [Join the community](https://github.com/genialkartik/hacktoberfest-checker/discussions)
- **Official Hacktoberfest**: [hacktoberfest.com](https://hacktoberfest.com/)

---

<div align="center">

**Made with ❤️ for the Open Source Community**

_Star ⭐ this repository if it helped you track your Hacktoberfest progress!_

[![GitHub stars](https://img.shields.io/github/stars/genialkartik/hacktoberfest-checker?style=social)](https://github.com/genialkartik/hacktoberfest-checker/stargazers)

</div>
