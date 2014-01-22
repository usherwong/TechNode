module.exports = function (grunt) {
  grunt.initConfig({
    useminPrepare: {
      html: 'static/index.html',
      options: {
        dest: 'build'
      }
    },
    usemin: {
      html: 'build/index.html',
      css: 'build/css/*.css'
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'static/components/bootstrap/dist/fonts/', src: ['**'], dest: 'build/fonts'},
          {expand: true, cwd: 'static/pages/', src: ['**'], dest: 'build/pages'},
          {'build/index.html': 'static/index.html'},
          {'build/favicon.ico': 'static/favicon.ico'}
        ]
      }
    },
    rev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 8
      },
      assets: {
        files: [{
          src: [
            'build/**/*.{jpg,jpeg,gif,png,js,css,eot,svg,ttf,woff}'
          ]
        }]
      }
    },
    clean: {
      main:['.tmp', 'build']
    }
  })
  grunt.loadNpmTasks('grunt-usemin')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-rev')

  grunt.registerTask('default', [
    'clean',
    'copy',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'rev',
    'usemin'
  ])
}