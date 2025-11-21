pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/lasyakaranam/automated-testing-framework.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Use npm installed on the system
                bat 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Use npx to run Cypress
                bat 'npx cypress run'
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo "Deploy your app here"' // Replace with your real deployment commands
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png, cypress/videos/**/*.mp4', allowEmptyArchive: true
        }
        success {
            echo 'CI/CD pipeline succeeded!'
        }
        failure {
            echo 'CI/CD pipeline failed!'
        }
    }
}
