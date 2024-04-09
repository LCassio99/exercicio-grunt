const { loadNpmTasks } = require("grunt")

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/style.css':'src/styles/style.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/style.min.css':'src/styles/style.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/script.min.js':'src/scripts/script.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    
    grunt.registerTask('default')
    grunt.registerTask('build', ['less', 'uglify'])
}