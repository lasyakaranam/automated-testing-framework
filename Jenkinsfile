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
                echo 'Installing NodeJS dependencies...'
                bat 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                echo 'Running Cypress tests in headless mode...'
                // Run Cypress headless to avoid GUI issues
                bat 'npx cypress run --headless'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Replace below with your actual deployment commands
                // Example for copying build files: 
                // bat 'xcopy /E /Y build\\* \\server\\path\\'
            }
        }
    }

    post {
        always {
            echo 'Archiving Cypress screenshots and videos...'
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png, cypress/videos/**/*.mp4', allowEmptyArchive: true
        }
        success {
            echo 'CI/CD pipeline succeeded! 🎉'
        }
        failure {
            echo 'CI/CD pipeline failed! ❌'
        }
    }
}
