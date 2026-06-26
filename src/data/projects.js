import foodloopImage from '../assets/images/projects/foodloop.png';
import cloudpilotImage from '../assets/images/projects/cloudpilot.png';
import cognitiveFlowImage from '../assets/images/projects/cognitive-flow.png';

export const projects = [
  {
    id: 'foodloop',
    category: 'LOGISTICS & DATA',
    title: 'FoodLoop: Logistics Engine',
    description:
      'A real-time global supply chain visualizer utilizing graph theory to optimize food distribution routes and reduce waste by 30% through predictive analytics.',
    tags: ['Node.js', 'PostgreSQL', 'D3.js', 'AWS Lambda'],
    image: foodloopImage,
    reverse: false,
    link: '#',
  },
  {
    id: 'cloudpilot',
    category: 'INFRASTRUCTURE',
    title: 'CloudPilot: IaC Visualizer',
    description:
      'A high-fidelity visual orchestration tool for Terraform and Kubernetes environments. Map multi-region clusters with cinematic 3D representations of active server health.',
    tags: ['Kubernetes', 'Terraform', 'Three.js', 'Go'],
    image: cloudpilotImage,
    reverse: true,
    link: '#',
  },
  {
    id: 'cognitive-flow',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'Cognitive Flow',
    description:
      'Next-generation AI pair programmer utilizing local LLMs to provide context-aware refactoring suggestions without sending data to the cloud.',
    tags: ['Python', 'PyTorch', 'Rust', 'WebAssembly'],
    image: cognitiveFlowImage,
    reverse: false,
    link: '#',
  },
];
