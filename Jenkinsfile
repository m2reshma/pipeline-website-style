pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo "Cloning repository..."
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running tests..."
                sh 'npm test'
            }
        }

        stage('Build Website') {
            steps {
                echo "Building the website..."
                sh 'mkdir -p dist && cp -r public/* dist/'
            }
        }

        stage('Deploy Website') {
            steps {
                echo "Deploying website on localhost..."
                sh 'nohup npm start &'
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful! Visit http://localhost:3000"
        }
        failure {
            echo "❌ Build failed. Check the logs for errors."
        }
    }
}