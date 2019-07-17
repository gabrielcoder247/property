from django.conf.urls import url
from . import views
from . import views as core_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns=[
    # url('^$',views.welcome,name = 'welcome'),
    url(r'^$',views.home,name='home_page'),
    url(r'^signup/$', core_views.signup, name='signup'),
    url(r'^api/user/$', views.UserList.as_view()),
    url(r'^api/profile/$', views.ProfileList.as_view())
    
    
]


if settings.DEBUG:
    urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)